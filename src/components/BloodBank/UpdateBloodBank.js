import CONSTANTS from "constants/constants";
import { Container } from "@mui/system";
import { Form } from "react-final-form";
import { useState, useEffect } from "react";
import REGEX from "constants/regex";
import axios from "axios";
import FormBackground from "components/SysAdmin/FormBackground";
import UpdateBloodBankForm from "./UpdateBloodBankForm";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { axiosInstance } from "config/https";
import { toast } from "react-toastify";

const useFetchData = (path) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`${CONSTANTS.API}${path}`);
        setData(response);
        setAddress(response.address);
        setLocation(response.address.location);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    address,
    location,
    loading,
  };
};

const UpdateBloodBank = () => {
  const numberRegex = new RegExp(REGEX.NUMBER);
  const params = useParams();
  const router = useNavigate();
  const { data, address, location, loading } = useFetchData(
    "BloodBank/" + params.bloodBankId
  );

  const validate = (values) => {
    let returnObject = {};
    if (!values.name) {
      returnObject.name = "This field is required!";
    }
    if (!values.description) {
      returnObject.description = "This field is required!";
    }
    if (!numberRegex.test(values.rating)) {
      returnObject.rating = "Numerical characters only!";
    }
    if (!values.street) {
      returnObject.street = "This field is required";
    }
    if (!numberRegex.test(values.number)) {
      returnObject.number = "Numerical characters only!";
    }
    if (!values.city) {
      returnObject.city = "This field is required";
    }
    if (!numberRegex.test(values.postalCode)) {
      returnObject.postalCode = "Numerical characters only!";
    }
    if (!values.country) {
      returnObject.country = "This field is required";
    }

    return returnObject;
  };

  const onSubmit = async (values) => {
    const updateBloodBankDTO = {
      id: data.id,
      name: values.name,
      description: values.description,
      rating: values.rating,
      updateAddressDTO: {
        id: address.id,
        city: values.city,
        street: values.street,
        country: values.country,
        number: values.number,
        postalCode: values.postalCode,
        locationId: location.id,
        longitude: values.longitude,
        latitude: values.latitude,
      },
    };

    const update = async () => {
      try {
        const {} = await axiosInstance.put(
          `${CONSTANTS.API}BloodBank/update`,
          updateBloodBankDTO
        );
        toast("Blood Bank successfully updated!");
        router("/blood-bank-profile");
      } catch (error) {
        toast(error);
      }
    };

    update();
  };
  return (
    <>
      <FormBackground raised>
        <Form
          initialValues={{ ...data, ...address, ...location }}
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <UpdateBloodBankForm />
              <Container sx={{ display: "grid", placeItems: "center" }}>
                <Button variant="outlined" color="secondary" type="submit">
                  Submit
                </Button>
              </Container>
            </form>
          )}
        ></Form>
      </FormBackground>
    </>
  );
};

export default UpdateBloodBank;
