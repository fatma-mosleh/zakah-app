import { Mina } from "next/font/google";
import Link from "next/link";
export default function Home(){

    return(
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-4 text-center">

        <h1 className="text-4xl sm:text-5xl font-bold text-green-700 dark:text-green-300 mb-4">
            حسابة الزكاة
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-8">
              احسب زكاتك بسهولة، سواء كانت مال، ذهب، أو تجارة. ندعمك في معرفة
        الزكاة المستحقة بدقة ووضوح
        </p>
        <div className="flex flex-col sm:flex-row gap-4">

           <Link 
                href="/calculator"
                className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
           >
           ابداء الحساب
           
           </Link>
        <a 
        href="https://github.com/اسم-مستخدمك/اسم-المشروع"
        target="_blank"
        className="px-6 py-3 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-xl shadow-md hover:opacity-90 transition"
        
        >
        معاينة الكود
        
        </a>

        </div>
        </main>
    )
}