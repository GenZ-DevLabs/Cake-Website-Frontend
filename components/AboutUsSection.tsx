import Image from "next/image";
interface AboutUsSectionProps {}

export default function AboutUsSection(props: AboutUsSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-sectionbg">
      <h1 className="font-josefin text-black font-bold text-[3.5rem] my-8">
        About Us
      </h1>
      <div className="grid grid-cols-2 justify-center items-center font-lato text-black text-[1.125rem] mx-64">
        <Image
          src={"/about_us.png"}
          alt="about us image"
          width={500}
          height={700}
          className="rounded-[3.75rem]"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="text-text">
            Welcome to SweetBake Delights, where every bite is a slice of
            happiness! At SweetBake Delights, we are dedicated to creating
            exquisite homemade cakes that not only tantalize your taste buds but
            also warm your heart with the essence of home-baked goodness.
            <br />
            <br />
            Life&apos;s celebrations are as unique as the individuals who
            celebrate them. That&apos;s why we offer personalized cakes that are
            a reflection of your special moments. Our skilled bakers collaborate
            with you to bring your vision to life, creating custom designs that
            leave a lasting impression.
            <br />
            <br />
            Dive into a world of flavors that range from classic to creative.
            Indulge in the timeless elegance of our moist Red Velvet cake,
            experience the rich intensity of our Triple Chocolate Ganache
            masterpiece, or savor the delicate beauty of our Lemon Berry Bliss
            creation. With a menu that caters to all palates, there&apos;s a
            SweetBake delight for every occasion.
            <br />
            <br />
            We understand that life can be busy, so we&apos;ve made it easy for
            you to enjoy our homemade cakes. Place your order online or visit
            our charming storefront, and let us handle the rest. Our efficient
            delivery ensures that your SweetBake delight arrives fresh and on
            time, ready to elevate your celebrations.
          </p>
          <button className="px-6 py-2 mt-12 rounded-[6.25rem] border-2 border-primarybutton text-text font-josefin text-[1.125rem]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
