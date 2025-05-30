import Image from "next/image";
import Link from "next/link";
export default function Home() {
 
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">حاسبة الزكاة</h1>
      <p className="text-lg max-w-xl text-gray-700 mb-6">
        احسب زكاتك بسهولة حسب نوع المال أو الذهب أو التجارة. كل اللي عليك إنك تختار النوع وتدخل البيانات، وإحنا نحسبها لك.
      </p>
     <Link   href="/calculator"
       
      >
        <span className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition cursor-pointer">
        ابدأ الحساب
     </span>
     </Link>
    </main>
  );
}

 
