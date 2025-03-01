import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/ApiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [userType, setUserType] = useState("EMPLOYEE");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [street, setStreet] = useState("");
  const [wardName, setWardName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [provinceName, setProvinceName] = useState("");
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let newErrors = {};

    if (!email.includes("@gmail.com")) {
      newErrors.email = t("Email must be a valid Gmail address (e.g., example@gmail.com)");
    }

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = t("Phone number must be exactly 10 digits");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const userData = {
      username,
      fullName,
      email,
      phone,
      userType,
      position: userType === "EMPLOYEE" ? position || "" : "",
      department: userType === "EMPLOYEE" ? department || "" : "",
      agencyName: userType === "AGENCY" ? agencyName || "" : "",
      street: street || "",
      wardName: wardName || "",
      districtName: districtName || "",
      provinceName: provinceName || "",
      createdAt: new Date().toISOString(),
    };

    try {
      await register(userData);
      toast.success(t("Registration successful! Please wait for admin to provide your password."), {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Registration Error:", err.response?.data || err.message);
      toast.error(t("Registration failed. Please check your information."), { position: "top-right" });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#E7F0FD] to-[#D6E4F0] min-h-screen">
      <div className="flex shadow-2xl bg-white border border-[#2E4F4F] rounded-lg w-[800px] p-10">
        <div className="w-full">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
            {t("Sign Up")}
          </h2>
          <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Full Name")} value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Username")} value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input className={`w-full px-5 py-3 text-lg bg-gray-100 border ${errors.email ? "border-red-500" : "border-[#2E4F4F]"} rounded-lg`} type="email" placeholder={t("Email")} value={email} onChange={(e) => setEmail(e.target.value)} required />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
              <input className={`w-full px-5 py-3 text-lg bg-gray-100 border ${errors.phone ? "border-red-500" : "border-[#2E4F4F]"} rounded-lg`} type="text" placeholder={t("Phone")} value={phone} onChange={(e) => setPhone(e.target.value)} required />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
              <select className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="EMPLOYEE">{t("Employee")}</option>
                <option value="AGENCY">{t("Agency")}</option>
              </select>

              {userType === "EMPLOYEE" && (
                <>
                  <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Position")} value={position} onChange={(e) => setPosition(e.target.value)} required />
                  <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Department")} value={department} onChange={(e) => setDepartment(e.target.value)} required />
                </>
              )}

              {userType === "AGENCY" && (
                <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Agency Name")} value={agencyName} onChange={(e) => setAgencyName(e.target.value)} required />
              )}
            </div>

            <div className="flex flex-col gap-5">
              <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Street")} value={street} onChange={(e) => setStreet(e.target.value)} required />
              <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Ward")} value={wardName} onChange={(e) => setWardName(e.target.value)} required />
              <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("District")} value={districtName} onChange={(e) => setDistrictName(e.target.value)} required />
              <input className="w-full px-5 py-3 text-lg bg-gray-100 border border-[#2E4F4F] rounded-lg" type="text" placeholder={t("Province")} value={provinceName} onChange={(e) => setProvinceName(e.target.value)} required />
            </div>

            <div className="col-span-2">
              <button type="submit" className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-[#2E4F4F] to-[#3A6565] rounded-lg hover:opacity-90">
                {t("Sign Up")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
