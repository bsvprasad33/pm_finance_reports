import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';


import { SnapShot } from './models/snapshot'
import { SnapshotDetails } from './mock-data/snapshot-details'

import * as _ from 'lodash';
import * as XLSX from 'ts-xlsx';

@Injectable()
export class FinanceReportsService {
        private basePath = "http://localhost:8080/rest/api";
        headers: Headers;
        options: RequestOptions;
        constructor( private http : Http) { 
            this.headers = new Headers({ 'Content-Type': 'application/json', 
                                       'Accept': 'q=0.8;application/json;q=0.9' });
          this.options = new RequestOptions({ headers: this.headers });
        }

        public getSnapShotDetails() : Promise <SnapShot[]> {
            return this.http.get(this.basePath+"/allSnapShots" , { headers: this.headers }).toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
        }
        private extractData(res: Response) {
            let body = res.json();
            return body || {};
        }

        private handleError(error: any): Promise<any> {
            console.error('An error occurred', error);
            return Promise.reject(error.message || error);
        }

        public saveSnapshotDetails(snapShotModel : any) : Promise<any> {
            let data = JSON.stringify(snapShotModel);
            return this.http.post(this.basePath+"/add",data, { headers: this.headers }).toPromise()
                    .then(this.extractData)
                    .catch(this.handleError); 
        }

        public getTransactionDetails(id : number) : Promise <Array<string>> {
            console.log(id + "::::: transaction Id");
        return Promise.resolve(["RTBR", "FinPulse"]);   
        }

        public processFileToJson(object,file): Observable<any> {
                let reader = new FileReader();
                let _this = this;
                
                return Observable.create(observer => {
                    reader.onload = function (e) {
                        let data = e.target['result'];
                        let workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        object.sheets = _this.parseWorksheet(workbook, true, true);
                        observer.next(object);
                        observer.complete();
                    }
                    reader.readAsBinaryString(file);
                });
            }
        parseWorksheet(workbook, readCells, toJSON) {
            if (toJSON === true) {
                return this.to_json(workbook);
            }
            let sheets = {};
            var _this = this;
            _.forEachRight(workbook.SheetNames, function (sheetName) {
                let sheet = workbook.Sheets[sheetName];
                sheets[sheetName] = _this.parseSheet(sheet, readCells);
            });
            return sheets;
        }

        parseSheet(sheet, readCells) {
            let range = XLSX.utils.decode_range(sheet['!ref']);
            let sheetData = [];

            if (readCells === true) {
                _.forEachRight(_.range(range.s.r, range.e.r + 1), function (row) {
                    let rowData = [];
                    _.forEachRight(_.range(range.s.c, range.e.c + 1), function (column) {
                        let cellIndex = XLSX.utils.encode_cell({
                            'c': column,
                            'r': row
                        });
                        let cell = sheet[cellIndex];
                        rowData[column] = cell ? cell.v : undefined;
                    });
                    sheetData[row] = rowData;
                });
            }

            return {
                'sheet': sheetData,
                'name': sheet.name,
                'col_size': range.e.c + 1,
                'row_size': range.e.r + 1
            }
        }

        to_json(workbook) {
            let result = {};
            workbook.SheetNames.forEach(function (sheetName) {
                let roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                if (roa.length > 0) {
                    result[sheetName] = roa;
                }
            });
            return result;
        }

}
