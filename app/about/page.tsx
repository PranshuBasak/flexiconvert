import { PackageExplanation } from "@/components/PackageExplanation";
import { packageExplanations } from "@/lib/constants";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  return (
    <div className="space-y-12 text-md md:text-lg text-gray-500 pb-4 md:pb-8">
      <p>
        Welcome to FlexiConvert, your ultimate destination for seamless multimedia conversion. Transform your files with ease, whether they&apos;re images, audio files, videos, or documents. FlexiConvert offers you unparalleled freedom, all at absolutely no cost! Say goodbye to limitations and hello to limitless creative possibilities.
      </p>
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          🖼️ Image Conversion:
        </h2>
        <p>
          Revolutionize your visual content with our image conversion tool. From resizing and cropping to converting formats, FlexiConvert has everything you need. Enhance your images effortlessly and bring your vision to life.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          🎧 Audio Transformation:
        </h2>
        <p>
          Elevate your audio projects with our versatile audio conversion capabilities. Convert between various formats like MP3, WAV, or AAC. Trim, merge, and adjust bitrates to create your perfect audio masterpiece.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          🎥 Video Metamorphosis:
        </h2>
        <p>
          Enter the world of video editing without limits. With FlexiConvert, you can edit and transcode videos effortlessly. Change formats, cut, merge, and create stunning video content for any platform or purpose.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          📝 Document Conversion:
        </h2>
        <p>
          Seamlessly convert documents between different formats such as PDF, DOCX, TXT, RTF, and more. Merge, split, or compress documents with ease, and streamline your document management process.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          🚀 Unlimited Usage, No Strings Attached:
        </h2>
        <p>
          FlexiConvert believes in empowering your creativity without hidden fees or restrictions. Convert as many files as your heart desires, and it won&apos;t cost you a dime. Experience true freedom with FlexiConvert.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          🌐 Accessible Anywhere:
        </h2>
        <p>
          Access FlexiConvert from any device with an internet connection. Whether you&apos;re on your computer, tablet, or smartphone, you can use our platform with ease. FlexiConvert goes wherever you go.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          🔒 Secure and Private:
        </h2>
        <p>
          Your privacy and security are our top priorities at FlexiConvert. Rest assured that your multimedia files are treated with the utmost care. Your files remain yours alone, and we ensure they stay that way.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          💡 User-Friendly Interface:
        </h2>
        <p>
          Our intuitive interface is designed for both beginners and experts alike. With FlexiConvert, the conversion process is a breeze. No technical expertise required – just seamless file conversion at your fingertips.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          📈 Constantly Evolving:
        </h2>
        <p>
          FlexiConvert is committed to innovation and staying ahead of the curve. Expect regular updates and new features to keep your multimedia experience fresh and exciting. We&apos;re always evolving to meet your needs.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          🌟 It&apos;s Free, It&apos;s Powerful, It&apos;s FlexiConvert:
        </h2>
        <p>
          Experience the freedom to convert images, audio, video, and documents without boundaries. Elevate your multimedia projects with the unlimited potential of FlexiConvert. Join the revolution today!
        </p>
      </div>

      <p>
        Join the revolution of content creators, professionals, and enthusiasts who are transforming the way they work with multimedia. Get started today and let your creativity shine like never before!
      </p>

        <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
            <BsArrowRight className="inline-block mr-2 w-6 h-6 text-blue-500" />
            Package Explanations:
            </h2>
            <div className="space-y-4">
              {Object.entries(packageExplanations).map(([packageName, description]) => (
                <PackageExplanation key={packageName} name={packageName} description={description} />
              ))}
            </div>
        </div>
    </div>
  );
}


