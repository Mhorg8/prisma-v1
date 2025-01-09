import React from 'react';
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";

const SignInForm = () => {
    return (
        <div className="w-full">
            <form className="w-full">
                <Input label="نام کاربری" name="email" type="text"/>
                <Input label="رمزعبور" name="password" type="password"/>
                <PrimaryButton
                    type="submit"
                    text="ورود"
                    bgColor="bg-green"
                    customStyle="py-4 mt-10 text-lg rounded-full"
                    textColor="text-white"
                />
                <div className="flex items-center gap-x-1 text-sm mt-3">
                    <p>حساب کاربری ندارید؟</p>
                    <Link href="/auth/signUp" className="underline">بسازید.</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;