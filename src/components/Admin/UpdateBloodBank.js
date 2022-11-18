import { useParams } from "react-router-dom";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

const  UpdateBloodBank = () =>{
    const params = useParams()
    const [bloodBank,setBloodBank] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:8080/api/BloodBank/${params.bloodBankId}`);
                setBloodBank(response.data);
                console.log(bloodBank)
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    }, []);

    console.log(bloodBank)

    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostal] = useState();

    const form = useForm();
    const{
      data,
      setValue,
      control,
      handleSubmit,
      formState: { errors },
    } = form;

    function onSubmit(e){
        e.preventDefault()
    //     const newBloodBank = {
    //   name,
    //   rating,
    //   description,
    //   address: {
    //     street,
    //     number,
    //     city,
    //     country,
    //     postalCode,
    //     longitude: 0,
    //     latitude: 0,
    //   },
    // };
    
    //     console.log(newBloodBank)
    }

   return (
    <div className="card">
      <h1>Blood Bank Details</h1>
      <form>
        <div className="row">
          <div className="row-elem">
            <div>
              <label>Name:</label>
              <input
                type="text"
                required
                value={bloodBank.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label>Rating:</label>
              <input
                type="text"
                required
                value={this.bloodBank.rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
           <div className="row-elem">
            <div>
              <label>Description:</label>
              <input
                type="text"
                required
                value={bloodBank.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div className="row-elem__wrap">
              <div className="row-elem__street">
                <label>Street:</label>
                <input
                  type="text"
                  required
                  //value={bloodBank.address.street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="row-elem__number">
                <label>Number:</label>
                <input
                  type="text"
                  required
                  //value={bloodBank.address.number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label>City:</label>
              <input
                type="text"
                required
                //value={bloodBank.address.city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-elem">
            <div>
              <label>Country:</label>
              <input
                type="text"
                required
                //value={bloodBank.address.country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="row-elem">
            <div>
              <label>Postal number:</label>
              <input
                type="text"
                required
                //value={bloodBank.address.postalCode}
                onChange={(e) => setPostal(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="row submit">
          <button type="submit" onClick={handleSubmit(onSubmit)}>Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBloodBank;