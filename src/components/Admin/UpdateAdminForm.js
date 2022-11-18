import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { FormProvider } from 'react-hook-form'
import axios from "axios";
import TextFieldControl from "controls/TextFieldControl";
import FormRules from "constants/form-rules";

export const UpdateAdminForm = () =>{

  const params = useParams();

const [user,setUser] = useState({});
 useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get("http://localhost:8080/api/Admin/1");
                setUser(response)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, []);

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
            label={"First Name"}
            name={"firstName"}
            control={control}
            defaultValue={user.firstname}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName && errors.firstName.message}
            rules={FormRules["name"]}
          />
        </div>
         <div className={"form-item"}>
          <TextFieldControl
            label={"Last Name"}
            name={"lastName"}
            control={control}
            //defaultValue={`${props.lastname}`}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName && errors.lastName.message}
            rules={FormRules["name"]}
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"Email"}
            name={"email"}
            control={control}
            //defaultValue={`${user.email}`}
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
            rules={FormRules["email"]}
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"Phone Number"}
            name={"phoneNumber"}
            control={control}
            //defaultValue={`${user.phoneNumber}`}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber && errors.phoneNumber.message}
            rules={FormRules["phone"]}
          />
        </div>
        <div className={"form-item"}>
          <TextFieldControl
            label={"JMBG"}
            name={"jmbg"}
            control={control}
            //defaultValue={`${user.jmbg}`}
            error={Boolean(errors.message)}
            rules={{ required: true }}
            helperText={
              errors.message && "Required"
            }
          />
        </div>
        
        <div className={"form-item"}>
          <TextFieldControl
            label={"Country"}
            name={"country"}
            control={control}
            //defaultValue={`${user.country}`}
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
            //defaultValue={`${user.city}`}
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
            //defaultValue={`${user.street}`}
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

        <div className={"submit-container"}>
          <button
            className="btn btn-primary btn-full"
            onClick={handleSubmit(onSubmit)}
          >
            Send
          </button>
        </div>

        {errorMessage && (
          <p className={"error-message"}>{errorMessage}</p>
        )}
      </FormProvider>
    </div>
     );
}
