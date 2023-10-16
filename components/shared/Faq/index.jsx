import { Col, Row } from "antd";
import CollapseItem from "../Collapse";
import Wrapper from "../Wrapper";
import Stlyes from "./styles.module.scss";

const Faq = () => {
  return (
    <Wrapper>
      <div className={Stlyes.wrapper}>
        <div>
          <p className={Stlyes.title}>سوالات متداول</p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <CollapseItem
              defaultActiveKey={"1"}
              items={[
                {
                  key: "1",
                  label: "چه زمانی امکان فعال‌سازی کارت را دارم؟",
                  children: (
                    <p>
                      پس از دریافت کارت بانکی خود از پست به ویجت کارت مراجعه
                      کنید. کارت جدید خود را در بالای صفحه مشاهده خواهید کرد. پس
                      از مشاهده کارت جدیدتان، گزینه فعال‌سازی را در پایین صفحه
                      انتخاب کنید. برای شروع این کار به اطلاعات درج‌شده روی کارت
                      بانکی خود احتیاج دارید.{" "}
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "2",
                  label: "ارسال کارت چقدر زمان می‌­برد؟",
                  children: (
                    <p>کارت حداکثر طی 7 روز کاری به آدرس شما ارسال می‌شود.</p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "3",
                  label: "هزینه صدور و ارسال کارت چقدر است؟",
                  children: <p>مجموع هزینه ­ها 280000 ریال است.</p>,
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "4",
                  label:
                    "اگر زمان مراجعه مامور پست در آدرس مشخص‌شده نباشم؛ چگونه می‌توانم کارتم را دریافت کنم؟",
                  children: (
                    <p>
                      در صورت عدم دریافت کارت پس از 7 روز کاری کافی‌ست با ورود
                      به <a>سامانه رهگیری مرسولات پستی</a> و وارد نمودن
                      کدرهگیری، وضعیت کارت خود را مشاهده کنید. در صورت عدم
                      دریافت کارت پس از 2 مرتبه مراجعه مامور پست باید به اداره
                      پست منطقه خود مراجعه کنید.
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "5",
                  label: "برای فعال‌سازی رمز پویا چه کنم؟",
                  children: (
                    <p>به شعبه و یا دستگاه­‌های ATM بانک تجارت مراجعه کنید.</p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "6",
                  label: "امکان تغییر رمز اول کارت از طریق باجت وجود دارد؟",
                  children: (
                    <p>
                      بله؛ با ورود رمز اول فعلی خود می‌توانید رمز جدیدتان را
                      تعریف کنید.
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "7",
                  label: "اگر رمز اول کارتم را فراموش کردم، چه کنم؟",
                  children: (
                    <p>
                      با مراجعه به شعب بانک تجارت می‌توانید رمز اول کارت خود را
                      دریافت کنید.
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "8",
                  label: "در صورت سرقت یا مفقودی کارتم چگونه آن را مسدود کنم؟",
                  children: (
                    <p>
                      با انتخاب گزینه مسدودسازی کارت و ورود اطلاعات اولیه، کارت
                      شما مسدود خواهد شد و باید به شعبه مراجعه کنید.
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "9",
                  label:
                    "اگر چک برگشتی داشته باشم، می‌توانم صدور مجدد کارت انجام دهم؟",
                  children: (
                    <p>
                      خیر؛ در صورت دارا بودن چک برگشتی امکان صدور کارت برای شما
                      فراهم نیست. پس از رفع سوء اثر، امکان صدور مجدد کارت خواهید
                      داشت.
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "10",
                  label: "کارت باجت عضو شبکه شتاب است؟",
                  children: (
                    <p>
                      بله، این کارت عضو شبکه شتاب است و تمام قابلیت‌­های یک کارت
                      بانکی را دارد.
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "11",
                  label: "آیا خدمات کارت فقط برای حساب‌های غیرحضوری است؟",
                  children: (
                    <p>خیر؛ برای تمامی کارت‌های شما در بانک تجارت است.</p>
                  ),
                },
              ]}
            />
          </div>
          <div className="col-span-12">
            <CollapseItem
              items={[
                {
                  key: "12",
                  label: "چگونه موجودی کارت خود را ‌به‌روز کنم؟",
                  children: (
                    <p>
                      برای به‌روزسانی موجودی کارت کافی‌ست گزینه “موجودی” را در
                      هر بار مراجعه انتخاب کنید تا موجودی در لحظه نمایش داده
                      شود.{" "}
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Faq;
