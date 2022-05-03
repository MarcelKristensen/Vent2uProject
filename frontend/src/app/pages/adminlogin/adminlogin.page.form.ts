import { FormBuilder, FormGroup, RequiredValidator, Validators } from "@angular/forms";

export class Adminloginpageform {
    private formBuilder:FormBuilder;

    constructor(formBuilder:FormBuilder)
    {
        this.formBuilder=formBuilder;
    }

    createForm():FormGroup{
        return this.formBuilder.group({
            admin:['',[Validators.required]],
            password:['',[Validators.required]]
        });
    }


}