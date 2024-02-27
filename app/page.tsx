import Dropzone from "@/components/Dropzone";


export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          FlexiConvert Your Files Now
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Your all-in-one solution for free, unlimited image, video, audio, and document conversion, offering batch processing and support for a wide range of formats.
        </p>
      </div>

      
      <Dropzone />
    </div>
  );
}