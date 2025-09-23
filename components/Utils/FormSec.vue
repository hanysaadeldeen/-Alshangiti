<template>
    <div
        class="bg-white boxShadow w-full md:max-w-[500px]  rounded-xl py-6 lg:py-8 px-10  lg:px-14 lg:max-w-[616px] relative ">

        <!-- <div class="absolute top-0 left-0 w-full h-full">
            <img src="~/assets/img/footerGroup.svg" alt="footerGroup" class="w-full h-full object-cover z-0">
        </div> -->
        <!-- <h1 class="text-xl md:text-2xl lg:text-3xl font-normal mb-7 text-primary-700"> -->
        <h1 class=" font-normal text-xl md:text-2xl lg:text-[32px] leading-[50px] md:leading-[72px] relative z-10">
            تواصل مع فريقنا القانوني
        </h1>
        <div class="bg-[#3A3A3A] rounded-full h-0.5 w-full max-w-[85px] mb-7 relative z-10"></div>

        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }"
            class="w-full lg:max-w-[616px] relative z-10 ">
            <div class="flex max-lg:flex-col w-full gap-4 lg:gap-8 mb-6">
                <div class="flex flex-col w-full lg:max-w-[304px]">
                    <label for="FullName" class="text-text  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
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
                    <label for="LastName" class="text-text  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
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
            <div class="flex flex-col w-full  mb-6">
                <label for="phoneNumber" class="text-text  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                    {{ locale === "ar" ? "رقم الهاتف" : "Phone Number" }}
                </label>
                <Field id="phoneNumber" name="phoneNumber" type="text" :placeholder="locale === 'en'
                    ? 'e.g. +9665xxxxxxx'
                    : 'أدخل رقم الهاتف '
                    "
                    class="inputBack py-2 md:py-3 px-2.5 md:px-4 h-[48px] w-full border  focus:outline-none focus:ring-2 focus:ring-primary-main"
                    :class="{ '!border-red-500': errors.phoneNumber }" />
                <span class="text-red-500 text-sm">{{
                    errors.phoneNumber
                }}</span>
            </div>
            <div class="flex flex-col w-full  mb-6">
                <label for="email" class="text-text  w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
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
                <label for="message" class="text-text w-fit font-normal text-sm mb-2 cursor-pointer inline-block">
                    {{ locale === "ar" ? "الرسالة" : "Message" }}
                </label>
                <Field id="message" name="message" as="textarea" :placeholder="locale === 'en'
                    ? 'Write your project details or inquiry here'
                    : 'اكتب رسالتك هنا'
                    "
                    class="  inputBack p-4 w-full h-32 md:h-[100px] border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-Primary"
                    :class="{ '!border-red-500': errors.message }" />
                <span class="text-red-500 text-sm">{{ errors.message }}</span>
            </div>
            <Button title="إرسال" />
            <div class="mt-5 text-text text-sm font-normal">
                من خلال إرسال استفسارك، فإنك توافق على الخاصة
                <nuxt-link to="privacy">
                    <span class="text-primary-500 underline">سياسة
                        الخصوصية</span>
                </nuxt-link> بنا.
            </div>
        </Form>
    </div>
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

</script>

<style scoped>
.inputBack {
    background-color: transparent;
    border: 1px solid #B5B5B5;
    color: #293329;
    border-radius: 8px;
}
</style>