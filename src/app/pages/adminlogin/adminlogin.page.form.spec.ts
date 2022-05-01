import { FormBuilder, FormGroup } from "@angular/forms"
import { Adminloginpageform } from "./adminlogin.page.form"
    
describe('adminloginpageform',() =>{

    let Constadminloginpageform:Adminloginpageform;
    let form: FormGroup

    beforeEach(()=>{
             Constadminloginpageform=new Adminloginpageform(new FormBuilder());
             form=Constadminloginpageform.createForm();
    })

    it('should creale login form empty',()=>{

        expect(form).not.toBeNaN();
        expect(form.get('admin')).not.toBeNull();
        expect(form.get('admin').value).toEqual("");
        expect(form.get('admin').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password').valid).toBeFalsy();
        
    })
    it('should have admin invalid if admin is not valid',()=>{
        form.get('admin').setValue('invalid name');

        expect(form.get('admin').valid).toBeFalsy();
        

    })

    it('should have valid admin name if admin name is valid',()=>{
        form.get('admin').setValue('admin');
        expect(form.get('admin').valid).toBeTruthy();
    })

    it('should have a valid form',() =>{
        form.get('admin').setValue('admin');
        form.get('password').setValue('password');
    
        expect(form.valid).toBeTruthy();
    })

     
})