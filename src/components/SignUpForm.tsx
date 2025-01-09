
"use client";
import Input from './Input';
import PrimaryButton from "@/components/PrimaryButton";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const SignUpForm = ({ formStatus }: { formStatus: boolean }) => {
    return (
        <AnimatePresence>
            {formStatus && ( // Conditionally render the motion.div
                <motion.div
                    key="form-animation"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }} // Exit animation
                    transition={{ duration: 0.5 }}
                    className="container w-full mt-0 lg:mt-5 xl:mt-10"
                >
                    <form className="flex flex-col items-end w-full gap-8 lg:gap-3 xl:gap-8">
                        <div className="flex items-center gap-5 w-full">
                            <Input label="نام" name="name" type="text" />
                            <Input label="نام کاربری" name="firstname" type="text" />
                        </div>
                        <Input label="شماره تماس" name="phone" type="text" />
                        <Input label="رمزعبور" name="password" type="password" placeholder="+6 " />
                        <div className="flex items-center gap-x-2 justify-between">
                            <input type="checkbox" className="w-7 h-7 p-1 border border-gray-500" />
                            <p className="text-sm text-gray-500 w-full text-end ">
                                I agree with Prisma&apos;s Terms of Service, Privacy Policy, and default Notification Settings.
                            </p>
                        </div>

                        <PrimaryButton
                            type="submit"
                            text="Sign up with Google"
                            customStyle="py-4 rounded-full font-bold text-base gap-4 w-full"
                            Icon={FcGoogle}
                            IconSize={22}
                            textColor="text-white"
                        />
                        <div className="flex items-center w-full text-sm text-gray-500">
                            <p>آیا حساب کاربری دارید ؟</p>
                            <Link href="/auth/signIn" className="font-medium underline">
                                ورود
                            </Link>
                        </div>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SignUpForm;
