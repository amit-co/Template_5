import voucher from "/New/voucher.svg";
import  Discount  from "../Components/Discount";
export default function Gift() {
  

    return (
        <>
            <div className="flex flex-col  items-center mx-auto">
                <h1 className="tracking-widest text-5xl underline underline-offset-8 mt-8">Gift Voucher</h1>
                <img src={voucher} className="mt-4" />
                <p className="tracking-widest text-center text-xl w-4/12 mt-8">Give The Ultimate Gift To SomeoneSpecial With Fish N Dine Experience.
                This Voucher Is Valid 48 Hours After Purchase, For 12 Months.
                </p>
                <Discount />
            </div>
        </>
            
    );
}
