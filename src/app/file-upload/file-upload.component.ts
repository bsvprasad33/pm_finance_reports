import { Component,  OnInit,  EventEmitter,  ElementRef,  ViewChild} from '@angular/core';
import {  AbstractControl,  FormControl,  ValidatorFn,  FormBuilder,  FormGroup,  Validators} from "@angular/forms";
import {  ActivatedRoute,  ParamMap,  Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {  Location} from '@angular/common';
import {  BsModalRef} from 'ngx-bootstrap';
import { FinanceReportsService } from '../finance-reports.service';



const uploadedList = ["RTBR"];
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit  {
  form: FormGroup;
  title: string;
  transactionId : number;
  reportType: string = "";
  uploadedList: Array < string > =uploadedList;
  result: any;
  inValidFileExtension: boolean;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private financeReportsService : FinanceReportsService) {
        this.createForm();
  }
  // saved: EventEmitter<any> = new EventEmitter();


  createForm() {
    this.form = this.fb.group({
      reportType: ['', [Validators.required, reportTypeValidator(this.uploadedList)]],
      reportFile: null
    });
  }

  ngOnInit() {
   // this.financeReportsService.getTransactionDetails(this.transactionId).then(details => this.uploadedList = details);
  }
  save(model, valid) {
    if (valid && !this.inValidFileExtension) {
      this.bsModalRef.hide();
      const formModel = this.form.value;
      console.log(formModel);
      console.log("on click save" + this.reportType);
    } else {
    }
  }

  
  onReportFileChange(e) {
   /* let reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('reportFile').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    } */
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      var extension = file.name.split(".")[1];
      if(['xlsx', 'xls'].includes(extension)) {
        this.inValidFileExtension = false;
        this.financeReportsService.processFileToJson({}, file).subscribe(data => {
          this.result = JSON.stringify(data['sheets'].Sheet1);
          console.log(this.result);
        });
      } else {
        this.inValidFileExtension = true
        this.fileInput.nativeElement.value ="";
      }
    }
  }
}



export function reportTypeValidator(reportTypes: Array <string> ): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any } => {
    return reportTypes.includes(control.value) ? {validReport: true} : null;
  };
}