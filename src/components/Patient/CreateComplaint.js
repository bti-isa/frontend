import style from "./CreateComplaint.module.css";
import { axiosInstance } from "../../config/https";
import { toast } from "react-toastify";

const send = () => {
  toast("Complaint send.");
};

const CreateComplaint = () => {
  return (
    <div className={style.card}>
      <div className={style.title__wrap}>
        <h1 className={style.title}>Complaint</h1>
      </div>
      <textarea className={style.text}></textarea>
      <div className={style.button__wrap}>
        <button className={style.button} onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
};

export default CreateComplaint;
