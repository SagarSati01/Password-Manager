import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast ,Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";


const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    if (
      form.site.length > 1 &&
      form.username.length > 1 &&
      form.password.length > 1
    ) {
      // console.log(form)
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      console.log(...passwordArray, form);
      setform({ site: "", username: "", password: "" });
      toast('Password saved !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    } else {
      toast("Error! Password not saved!");
    }
  };

  const deletePassword = (id) => {
    console.log("deleting passwith with id", id);
    let c = confirm("Do you really want to delete this password ?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );

      toast('Password Deleted!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    }
  };

  const editPassword = (id) => {
    console.log("editing password with id", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    // alert("copied to clipboard"+text);
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-300 opacity-20 blur-[100px]"></div>
      </div>
      <div className="p-3 container px-1 py-1 mx-auto md:px-40 md:py-16 min-h-[88.2vh]">
        <h1 className="sm:text-4xl text-2xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-sm sm:text-lg text-center">
          Your own Password Manager
        </p>

        <div className="flex flex-col p-4 text-black gap-2 sm:gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id="site"
          />

          <div className="flex flex-col md:flex-row w-full justify-between gap-2 sm:gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id="username"
            />

            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
                name="password"
                id="password"
              />
              <span className="absolute right-[3px] top-[3px] cursor-pointer" onClick={showPassword} >
                <img ref={ref}  className="p-1"  src="icons/eye.png" alt="eye"  width={26} />
              </span>
            </div>
          </div>
          <button onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-4 py-1 sm:px-8 sm:py-2 w-fit border border-green-900"
          >
            <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover" >
              {" "}
            </lord-icon>
            Save
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-xl sm:text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <div className="overflow-x-auto">
                <table className="table-auto w-full rounded-md overflow-hidden mb-10 break-all ">
                <thead className=" bg-green-800 text-white">
                  <tr>
                    <th className="py-2 text-sm sm:text-lg">Site</th>
                    <th className="py-2 text-sm sm:text-lg">Username</th>
                    <th className="py-1 text-sm sm:text-lg">Password</th>
                    <th className="py-1 text-sm sm:text-lg">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100 ">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-2 border border-white text-center break-all  truncate">
                          <div className="flex items-center justify-center flex-col md:flex-row text-xs sm:text-[16px]">
                            <a href={item.site} target="_blank">
                              <span>{item.site}</span>
                            </a>
                            <div className="cursor-pointer size-7 lordiconcopy  self-end" onClick={() => copyText(item.site)} >
                              <lord-icon style={{
                                  // width: "25px",
                                  // height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 border border-white text-center break-all truncate ">
                          <div className="flex items-center justify-center  flex-col md:flex-row text-xs sm:text-[16px]">
                            <span>{item.username}</span>
                            <div
                              className="cursor-pointer size-7 lordiconcopy  self-end"
                              onClick={() => copyText(item.username)}
                            >
                              <lord-icon
                                style={{
                                
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                                className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="py-2 border border-white text-center">
                          <div className="flex items-center justify-center  flex-col md:flex-row  text-xs sm:text-[16px]">
                            <span>{"*".repeat(item.password.length)}</span>
                            <div
                              className="cursor-pointer size-7 lordiconcopy  self-end"
                              onClick={() => copyText(item.password)}
                            >
                              <lord-icon
                                style={{
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                                className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="justify-center py-2 border border-white text-center">
                          <span className="cursor-pointer mx-1 " onClick={() => editPassword(item.id)} >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
                              // style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer mx-1"
                            onClick={() => deletePassword(item.id)}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
