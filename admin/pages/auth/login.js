import React, { useState } from "react";
import Auth from "layouts/Auth.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [send, setSend] = useState(false);
  const router = useRouter();
  const sendOrLogin = () => {
    if (!send) {
      axios
        .post(`${process.env.API_URL}/otp/signin`, {
          email,
        })
        .then((res) => {
          toast.success("Нууц үг амжилттай илгээлээ");
          console.log(res.data);
          setSend(true);
        });
      return;
    }
    axios
      .post(`${process.env.API_URL}/otp/signin/verify`, { email, otp })
      .then((res) => {
        localStorage.setItem("token", res.data);
        toast.success("Амжилттай нэвтэрлээ!");
        router.replace("/");
      });
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendOrLogin();
                  }}
                >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      И-Мэйл
                    </label>
                    <input
                      value={email}
                      disabled={send}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="И-Мэйл"
                    />
                  </div>
                  {send && (
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Нэг удаагын нууц үг
                      </label>
                      <input
                        value={otp}
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                        maxLength={6}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Нэг удаагын нууц үг"
                      />
                    </div>
                  )}

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      {!send ? "Нэвтрэх код авах" : "Нэвтрэх"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
