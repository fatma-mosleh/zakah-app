"use client";
import { useState } from "react";
import { useEffect } from "react";
export default function Calculator() {
  let [type, setTpye]=useState("money");
  let [weight,setWeight]=useState("");
  let[price,setPrice]=useState("");
  const [amount, setAmount] = useState("");
  let [good ,setGood]=useState("");
  let [cash, setCash]=useState("");
  let [dbit,setDbit]=useState("");
  const [result, setResult] = useState(()=>{
    if(typeof window !== "undefined"){
      let savde = localStorage.getItem("zakahResult");
      return savde ? parseFloat(savde) :null;

    }
    return null;
  });
   useEffect (() =>{

    if( result !== null){
      localStorage.setItem("zakahResult",result.toString());
    }

   },[result]);

  const calculateZakah = () => {
    if (type === "money") {
      const money = parseFloat(amount);
      if (!isNaN(money) && money > 0) {
        const zakah = money * 0.025;
        setResult(zakah);
      } else {
        setResult(null);
      }
    } else if (type === "gold") {
      const g = parseFloat(weight);
      const p = parseFloat(price);
      if (!isNaN(g) && g > 0 && !isNaN(p) && p > 0) {
        const total = g * p;
        const zakah = total * 0.025;
        setResult(zakah);
        if(g <85){
          alert("تنبيه: وزن الذهب أقل من النصاب (85 جرام)، وقد لا تجب الزكاة")
        }
      } else {
        setResult(null);
      }
      
    }else if( type === "tgara"){
      // if(
      //     !isNaN(good)&&
      //     good >= 0 &&
      //      !isNaN(cash)&& 
      //      cash >= 0 &&
      //      !isNaN (dbit) &&
      //      dbit >= 0
          //  )
          const goods = parseFloat(good);
          const cashs = parseFloat(cash);
          const dbits = parseFloat(dbit);

             if (
          !isNaN(goods) &&
            goods >= 0 &&
            !isNaN(cashs) &&
           cashs >= 0 &&
           !isNaN(dbits) &&
            dbits >= 0
             )
           {
            let totel= goods +cashs - dbits;
            let zakah = totel >0 ? totel * 0.025 :0 ;
            setResult (zakah)
           }
           else {setResult(null);}
    }




  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-center dark:bg-gray-900 text-black dark:text-white">
     
      <button onClick={()=>{
        document.documentElement.classList.toggle("dark")
      }} 
      className=" absolute top-5 left-5 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow dark:bg-gray-900 text-black dark:text-white"
      >
        🌓 تبديل الوضع
      </button>
      
      <h1 className="text-3xl font-bold text-green-700 mb-4" dark:bg-gray-900 text-black dark:text-white>زكاة المال</h1>
      
      <div className="w-full max-w-md dark:bg-gray-900 p-6 rounded-xl shadow-md dark:bg-gray-900 text-black dark:text-white">
        <label className="block text-right mb-2 font-medium text-gray-700 dark:bg-gray-900 text-black dark:text-white">
            أدخل نوع الزكاه:
        </label>
        <select  value ={type}
          onChange={(e) =>{
            setTpye(e.target.value);
            setResult(null);
          } }
           className="w-full p-3 rounded-lg border border-gray-300 mb-4 text-right dark:bg-gray-900 text-black dark:text-black"
          >
        
          
        <option value="money">
          زكاة المال
        </option>
          
        <option value="gold">
          زكاة الذهب
        </option>
        <option value="tgara">
          زكاة التجاره
        </option>
        </select>
        {type === "money" && (
          <>
          <label className="block text-right mb-2 font-medium text-gray-700 "> 
            ادخل المبلغ بالجنيه</label>
          <input type="number" value={amount} 
          onChange={(e) => setAmount (e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-600 mb-4 text-right"
          placeholder="100000:مثلا"
          />
          
          </>
        )}
        


        {type === "gold" &&(
          <>
          <label className="block text-right mb-2 font-medium text-gray-700">
             وزن الذهب بالجرام</label>
          
            <input type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            
            className="w-full p-3 rounded-lg border border-gray-600 mb-4 text-right"
              placeholder="مثلاً: 90"
            />
            <label className="block text-right mb-2 font-medium text-gray-700">
              سعر الجرام بالجنيه
            </label>
            <input type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-600 mb-4 text-right"
              placeholder="مثلاً: 3000"
            />
          </>
          


        )}

        {type === "tgara" &&(

          <>
          <label className="block text-right mb-2 font-medium text-gray-700">

            قيمة البضائع الحاليه:
          </label>
          <input type="number"
          value={good}
          onChange={(e)=> setGood(e.target.value)}
           className="w-full p-3 rounded-lg border border-gray-600 mb-4 text-right"
             placeholder="مثلاً: 50000"
          
          />
          <label className="block text-right mb-2 font-medium text-gray-700">
            النقد الموجود كاش او ف البنك:
          </label>
          <input type="number"
          value={cash}
          onChange={(e)=>setCash(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-600 mb-4 text-right"
            placeholder="مثلاً: 20000"
          
          />

          <label className="block text-right mb-2 font-medium text-gray-700">
          الديون واجب سداده:
          </label>
          <input type="number"
          value={dbit}
          onChange={(e)=> setDbit(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-600 mb-4 text-right"
           placeholder="مثلاً: 10000"
          
          
          />
          
          </>


        )}
        <button
          onClick={calculateZakah}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          احسب الزكاة
        </button>
        {result !== null && (
          <div className="mt-6 bg-green-100 border border-green-300 rounded-xl p-6 shadow-md w-full text-center">
    <h2 className="text-2xl font-bold text-green-800 mb-2">
      الزكاة المستحقة
    </h2>
          <p className="text-3xl text-green-700 font-semibold">
            الزكاة المستحقة: {result.toFixed(2)} جنيه
          </p>
          
        
        <button
      onClick={() => {
        setResult(null);
        setAmount("");
        setWeight("");
        setPrice("");
        setGood("");
        setCash("");
        setDbit("");
        localStorage.removeItem("zakatResult");
      }}
      
        className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"    >
      إعادة تعيين
      
    </button>
    </div>
    )}
      </div>
    </main>
  );
}

