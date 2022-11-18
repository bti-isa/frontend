import { useState } from "react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FormProvider } from 'react-hook-form'
import TextFieldControl from "controls/TextFieldControl";
import FormRules from "constants/form-rules";

export const UpdateAddressForm = () =>{
const form = useForm()
    const{
        data,
        setValue,
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const [errorMessage, setErrorMessage] = useState()
    const router = useNavigate();
    
    async function onSubmit(dto) {
        console.log(dto)
    }

    return ( 
    <div className={"form-wrapper"}>
      <FormProvider {...form}>
        <div className={"form-item"}>
          <TextFieldControl
            label={"Country"}
            name={"country"}
            control={control}
            defaultValue=""
            error={Boolean(errors.country)}
            helperText={errors.country && errors.country.message}
            rules={FormRules["name"]}
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"City"}
            name={"city"}
            control={control}
            defaultValue=""
            error={Boolean(errors.city)}
            helperText={errors.city && errors.city.message}
            rules={FormRules["name"]}
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"Street"}
            name={"street"}
            control={control}
            defaultValue=""
            error={Boolean(errors.street)}
            helperText={errors.street && errors.street.message}
            rules={FormRules["name"]}
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"Number"}
            name={"number"}
            control={control}
            defaultValue=""
            error={Boolean(errors.number)}
            rules={{ required: true }}
            helperText={
              errors.message && "Required"
            }
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"Postal Code"}
            name={"postalCode"}
            control={control}
            defaultValue=""
            error={Boolean(errors.postalCode)}
            helperText={errors.postalCode && errors.postalCode.message}
            rules={FormRules["numeric"]}
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"Longitude"}
            name={"longitude"}
            control={control}
            defaultValue=""
            error={Boolean(errors.longitude)}
            helperText={errors.longitude && errors.longitude.message}
            rules={FormRules["numeric"]}
          />
           <TextFieldControl
            label={"Latitude"}
            name={"latitude"}
            control={control}
            defaultValue=""
            error={Boolean(errors.latitude)}
            helperText={errors.latitude && errors.latitude.message}
            rules={FormRules["numeric"]}
          />
        </div>
        

        {errorMessage && (
          <p className={"error-message"}>{errorMessage}</p>
        )}
      </FormProvider>
    </div>
     );
}