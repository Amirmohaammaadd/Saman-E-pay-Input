"use client"

import AppInput from "@/_components/app-input";
import { useState } from "react";

export type UserData = {
    personOne: string,
    personTwo: string,
}

const FormPage = () => {

    const [userData, setUserData] = useState<UserData>({
        personOne: "",
        personTwo: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (userData.personOne.length === 0 || userData.personOne.length > 10) {
            alert("نام نفر اصلی معتبر نیست!");
            return;
        }

        if (userData.personTwo.length === 0 || userData.personTwo.length > 5) {
            alert("نام شخص ثالث معتبر نیست!");
            return;
        }

        alert("اطلاعات ارسال شد");

        setUserData({
            personOne: "",
            personTwo: ''
        })
    };


    return (
        <div className="flex items-center justify-center gap-6 h-screen flex-col">

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 max-w-sm mx-auto border p-10 border-slate-300 rounded-md bg-slate-50 shadow-xl"
            >

                <AppInput
                    onChange={(e) => setUserData({
                        ...userData,
                        personOne: e.target.value
                    })}
                    value={userData.personOne}
                    label="نام نفر اصلی"
                    placeholder="نام خود را وارد کنید"
                    hasStar
                    maxLength={10}
                    helpText="حداکثر 10 کاراکتر مجاز است"
                    errorMessage="طول نام نفر اصلی بیش از حد مجاز است"
                />

                <AppInput
                    onChange={(e) => setUserData({
                        ...userData,
                        personTwo: e.target.value
                    })}
                    label="نام شخص ثالث"
                    placeholder="نام شخص ثالث را وارد کنید"
                    maxLength={5}
                    value={userData.personTwo}
                />

                <button
                disabled={userData.personTwo.length > 5 || userData.personOne.length > 10}
                    type="submit"
                    className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mt-5"
                >
                    ارسال
                </button>
            </form>

        </div>);
}

export default FormPage;