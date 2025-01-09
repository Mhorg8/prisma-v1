"use client"
import PrimaryButton from "@/components/PrimaryButton";
import {FcGoogle} from "react-icons/fc";
import Link from "next/link";
import VideoContainer from "@/components/VideoContainer";
import {useState} from "react";
import SignUpForm from "@/components/SignUpForm";
import {FaChevronLeft} from "react-icons/fa6";

const SignUpPage = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <div className="w-full flex items-center h-[calc(100dvh-90px)]">
            {/*  main  */}
            <main
                className="flex-1 w-full lg:w-[575px] flex items-center justify-center xl:justify-end xl:pl-[160px] h-full">
                <div className="w-full xl:w-[420px] h-full flex flex-col items-center justify-center relative">
                    {/* back button */}
                    {showForm && <button
                        className="form__button-back"
                        onClick={() => setShowForm(false)}><FaChevronLeft/>
                    </button>}

                    <h1 className="text-2xl font-semibold">ثبت نام در پریسما</h1>
                    {/* sign in options */}
                    {!showForm ? <div className="mt-6 w-full px-10 xl:px-0">
                        <PrimaryButton
                            type="button"
                            text="Sign up with Google"
                            customStyle="py-4 rounded-full font-bold text-base gap-4 md:w-[420px]"
                            Icon={FcGoogle}
                            IconSize={22}
                            textColor="text-white"
                        />
                        <div className="vertical-row text-zinc-500">Or</div>
                        <button onClick={() => setShowForm(true)}
                                className="w-full md:w-[420px] border border-black rounded-full py-4">
                            Continue with email
                        </button>
                        <div className="mt-14">
                            <p className="privacy-text text-sm text-center text-black">
                                By creating an account you agree with our <Link href="/">Terms of Service</Link>, <Link
                                href="/">Privacy Policy</Link>, and our default <Link href="/">Notification
                                Settings</Link>.
                            </p>
                            <div className="text-base text-black flex items-center gap-x-1 w-full justify-center mt-2">
                                <p>آیا حساب کاربری دارید ؟</p>
                                <Link href='/auth/signIn' className="underline">وارد شوید</Link>
                            </div>
                        </div>
                    </div> : <SignUpForm formStatus={showForm}/>}
                </div>
            </main>
            {/*  video container  */}
            <aside className="hidden md:block w-[400px] lg:w-[450px] h-full relative">
                <VideoContainer/>
            </aside>
        </div>
    );
};

export default SignUpPage;
