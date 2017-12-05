import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import {
  ActivatedRoute,
  ParamMap,
  Params
} from '@angular/router'
import 'rxjs/add/operator/switchMap';
import {
  Location
} from '@angular/common';
import {
  BsModalRef
} from 'ngx-bootstrap';




const uploadedList = ["RTBR", "FinPulse"];
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  form: FormGroup;
  title: string;
  reportType: string = "";
  uploadedList: Array < string > = uploadedList;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {
    this.createForm();
  }
  // saved: EventEmitter<any> = new EventEmitter();


  createForm() {
    this.form = this.fb.group({
      reportType: ['', [Validators.required, reportTypeValidator(this.uploadedList)]],
      reportFile: ['' , Validators.required]
    });
  }
  ngOnInit() {
    /*this.form = this.fb.group({
          reportType: ['', [Validators.required,reportTypeValidator]],
          reportFile: ['' , Validators.required]
        });
      */

  }
  save(model, valid) {
    console.log(model);
    console.log(valid);
    if (valid) {
      this.bsModalRef.hide();
      const formModel = this.form.value;
      console.log(formModel);
      console.log("on click save" + this.reportType);
    }


    // this.saved.emit('someData');
  }
  onReportFileChange(e) {
    let reader = new FileReader();
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
    }
  }
}



export function reportTypeValidator(reportTypes: Array <string> ): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any } => {
    console.log(reportTypes);
    return reportTypes.includes(control.value) ? {validReport: true} : null;
  };
}
