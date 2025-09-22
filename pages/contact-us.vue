<template>
    <main class="contactPage   max-xl:px-6">
        <div class="w-full max-w-[1208px] mx-auto mt-[60px]  md:mt-[120px]">
            <div class="form flex md:gap-16 max-md:flex-col ">
                <div
                    class="bg-white shadow-md w-full md:max-w-[448px] rounded-xl p-6  md:p-8 lg:p-10 max-md:mb-10 lg:max-w-[584px] ">
                    <h1 class="text-xl font-medium mb-8 text-black">أرسل لنا رسالتك</h1>
                    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }"
                        class="w-full lg:max-w-[640px]">
                        <div class="flex max-lg:flex-col w-full gap-4 lg:gap-8 mb-8">
                            <div class="flex flex-col w-full lg:max-w-[304px]">
                                <label for="FullName"
                                    class="text-TextD3  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                    {{ locale === "ar" ? "الاسم الأول" : "First Name" }}
                                </label>
                                <Field id="FullName" name="FullName" type="text" :placeholder="locale === 'en'
                                    ? 'Enter First Name'
                                    : 'أدخل اسمك الأول'
                                    "
                                    class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-Primary"
                                    :class="{ '!border-red-500': errors.FullName }" />
                                <span class="text-red-500 text-sm">{{
                                    errors.FullName
                                    }}</span>
                            </div>
                            <div class="flex flex-col w-full lg:max-w-[304px]">
                                <label for="LastName"
                                    class="text-TextD3  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                    {{ locale === "ar" ? "الاسم الأخير" : "last Name" }}
                                </label>
                                <Field id="LastName" name="LastName" type="text" :placeholder="locale === 'en'
                                    ? 'Enter Last Name'
                                    : 'أدخل اسمك الأخير'
                                    "
                                    class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-Primary"
                                    :class="{ '!border-red-500': errors.LastName }" />
                                <span class="text-red-500 text-sm">{{
                                    errors.LastName
                                    }}</span>
                            </div>
                        </div>
                        <div class="flex flex-col w-full  mb-8">
                            <label for="email"
                                class="text-TextD3  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                {{
                                    locale === "ar" ? "عنوان البريد الإلكتروني" : "e.g. name@domain.com"
                                }}
                            </label>
                            <Field id="email" name="email" type="email" :placeholder="locale === 'en'
                                ? 'Enter your email address'
                                : 'أدخل عنوان بريدك الإلكتروني'
                                "
                                class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-Primary"
                                :class="{ '!border-red-500': errors.email }" />
                            <span class="text-red-500 text-sm">{{ errors.email }}</span>
                        </div>
                        <div class="flex flex-col w-full lg:max-w-[640px]">
                            <label for="message"
                                class="text-TextD3  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                                {{ locale === "ar" ? "الرسالة" : "Message" }}
                            </label>
                            <Field id="message" name="message" as="textarea" :placeholder="locale === 'en'
                                ? 'Write your project details or inquiry here'
                                : 'اكتب رسالتك هنا'
                                "
                                class="  inputBack p-4 w-full h-32 md:h-[160px] border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-Primary"
                                :class="{ '!border-red-500': errors.message }" />
                            <span class="text-red-500 text-sm">{{ errors.message }}</span>
                        </div>
                        <button type="submit"
                            class="border w-full mt-10 rounded-2xl py-3 px-6 md:px-8 lg:px-10 flex justify-center items-center gap-4 transition-all duration-300 cursor-pointer group ease-in-out bg-Primary text-white hover:bg-BtnBgPrimaryHover active:bg-BtnBgPrimaryPressed border-transparent">
                            <span class="text-xs md:text-sm lg:text-base font-medium">ابدأ مشروعك الآن</span>
                        </button>
                    </Form>
                </div>

            </div>



        </div>
    </main>

</template>

<script setup lang="ts">
const { locale } = useI18n()

import { Form, Field } from "vee-validate";
import * as yup from "yup";
const isOpenSuccess = ref(false);
const isLoading = ref(false);
const { sendEmail } = useEmail();




const schema = yup.object({
    FullName: yup
        .string()
        .min(3
            ,
            locale.value === "en"
                ? "First name must be at least 3 characters"
                : "يجب أن يكون الاسم الأول على الأقل 3 أحرف"
        )
        .required(
            locale.value === "en" ? "First name is required" : "الاسم الأول مطلوب"
        ),
    LastName: yup
        .string()
        .min(
            3,
            locale.value === "en"
                ? "Last Name must be at least 3 characters"
                : "يجب أن يكون الاسم الأخير على الأقل 3 أحرف"
        )
        .required(
            locale.value === "en" ? "Last name is required" : "الاسم الأخير مطلوب"
        ),
    email: yup
        .string()
        .email(
            locale.value === "en" ? "Invalid email" : "البريد الإلكتروني غير صالح"
        )
        .required(
            locale.value === "en" ? "Email is required" : "البريد الإلكتروني مطلوب"
        ),

    phoneNumber: yup
        .string()
        .matches(
            /^\+?[0-9]{10,}$/,
            locale.value === "en"
                ? "Number must be at least 10 digits"
                : "يجب أن يكون الرقم على الأقل 10 أرقام"
        )
        .required(
            locale.value === "en" ? "Phone number is required" : "رقم الهاتف مطلوب"
        ),

    message: yup
        .string()
        .min(
            10,
            locale.value === "en"
                ? "Message must be at least 10 characters"
                : "يجب أن تحتوي الرسالة على 10 أحرف على الأقل"
        )
        .max(
            500,
            locale.value === "en"
                ? "Message cannot exceed 500 characters"
                : "يجب ألا تتجاوز الرسالة 500 حرف"
        )
        .required(locale.value === "en" ? "Message is required" : "الرسالة مطلوبة"),
});
const onSubmit = async (values: any) => {
    try {
        isLoading.value = true;
        const response = await sendEmail(values);

        if (response.status === 200) {
            console.log("success");
        }
        isLoading.value = false;
    } catch (error) {
        isLoading.value = false;
        isOpenSuccess.value = true;
    }
}
// import mail from "../assets/img/Contact/mail.svg"
// import telephone from "../assets/img/Contact/telephone.svg"
// import location from "../assets/img/Contact/location.svg"
// import minute from "../assets/img/Contact/minute.svg"

// const Features = [
//     {
//         title: 'البريد الإلكتروني',
//         description: "info@techozone.sa",
//         icon: mail,
//         link: "https://mail.google.com/mail/?view=cm&to=info@techozone.sa"
//     },
//     {
//         title: ' رقم الهاتف',
//         description: '+966 50 123 4567',
//         icon: telephone,
//         link: "tel:+966501234567"
//     },
//     {
//         title: 'عنوان المكتب',
//         description: 'الرياض، المملكة العربية السعودية',
//         icon: location,
//         link: "https://www.google.com/maps/search/+ajaj+%D8%AC%D8%AF%D8%A9+-+%D8%AD%D9%8A+%D8%A7%D9%84%D8%B4%D8%A7%D8%B7%D8%A6-+%D9%85%D8%AC%D9%85%D8%B9+%D8%A7%D9%84%D9%85%D9%82%D8%B1+%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A+%D9%84%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%E2%80%AD/@21.5679405,39.1435889,255m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
//     },
//     {
//         title: 'ساعات العمل',
//         description: 'الأحد – الخميس، 9:00 صباحًا – 5:00 مساءً',
//         icon: minute,
//         link: ""
//     }
// ]

</script>

<style scoped>
.inputBack {
    background-color: transparent;
    border: 1px solid #A3ADBA;
    color: #1A1F2B;
    border-radius: 12px;
}
</style>