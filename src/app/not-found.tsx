import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center py-8 px-4 lg:py-16 lg:px-6" role="status">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-yellow-300">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Something&#39;s missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-300">Sorry, we can&#39;t find that page. You&#39;ll find lots to explore on the home page. </p>
                    <Link href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-yellow-300 my-4">Back to Homepage</Link>
            </div>
        </div>
    )
}