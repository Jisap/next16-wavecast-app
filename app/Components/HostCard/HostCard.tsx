import Image, { StaticImageData } from "next/image";

interface HostCardProps {
  name: string;
  role: string;
  img: string | StaticImageData;
  className?: string;
}

const HostCard = ({ name, role, img, className = "" }: HostCardProps) => {
  return (
    <div className={`host-card relative group ${className}`}>
      <div className="host-img-wrap">
        <div className="host-img overflow-hidden rounded-2xl">
          <Image
            src={img}
            alt={name}
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="host-info px-3 py-4">
        <h3 className="text-2xl text-gray-300 font-semibold group-hover:text-prim transition-colors duration-300">
          {name}
        </h3>
        <p className="text-lg text-gray-400">
          {role}
        </p>
      </div>

      <div className="host-icons absolute bottom-5 bg-gray rounded-full right-5 group/icons">
        {/* Plus Icon */}
        <i className="bi bi-plus-lg bg-gray w-14 h-14 flex items-center justify-center rounded-full cursor-pointer border border-transparent group-hover/icons:rounded-t-none group-hover/icons:bg-gray-light group-hover/icons:border group-hover/icons:border-gray transition-all duration-300 shadow-xl"></i>

        {/* Hidden Social Icons */}
        <div className="host-hidden-icons flex flex-col absolute bottom-12 right-0 opacity-0 invisible translate-y-4 group-hover/icons:opacity-100 group-hover/icons:visible group-hover/icons:translate-y-0 transition-all duration-300 ease-out bg-gray rounded-t-full p-2 border-x border-t border-gray-700">
          <i className="bi bi-facebook w-10 h-10 mb-1 flex items-center justify-center rounded-full bg-gray-light border border-prim/30 hover:bg-prim hover:text-black transition-all duration-200 cursor-pointer"></i>
          <i className="bi bi-instagram w-10 h-10 mb-1 flex items-center justify-center rounded-full bg-gray-light border border-prim/30 hover:bg-prim hover:text-black transition-all duration-200 cursor-pointer"></i>
          <i className="bi bi-twitter-x w-10 h-10 mb-1 flex items-center justify-center rounded-full bg-gray-light border border-prim/30 hover:bg-prim hover:text-black transition-all duration-200 cursor-pointer"></i>
          <i className="bi bi-youtube w-10 h-10 mb-1 flex items-center justify-center rounded-full bg-gray-light border border-prim/30 hover:bg-prim hover:text-black transition-all duration-200 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default HostCard;
