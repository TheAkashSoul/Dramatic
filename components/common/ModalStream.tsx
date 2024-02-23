import { IoMdCloseCircle } from "react-icons/io";

type props = {
  title: string;
  overview: string;
  videoKey: string;
  closeModal: () => void;
};
export default function ModelStream({
  title,
  overview,
  videoKey,
  closeModal,
}: props) {
  return (
    <main className="fixed inset-0 z-30 bg-[#504179]/30 backdrop-blur-md w-[80%] md:max-w-2xl mx-auto overflow-hidden overflow-y-scroll rounded-xl h-[60vh] md:h-[70vh] my-auto p-5">
      <div className="h-full">
        <div className="flex flex-row items-center justify-between mr-2 gap-2">
          <p className="text-white font-bold text-lg md:text-xl line-clamp-1">
            {title}
          </p>
          <IoMdCloseCircle
            onClick={closeModal}
            size={24}
            color="red"
            className="cursor-pointer"
          />
        </div>

        <div className="flex w-full h-2/4 md:h-3/5 my-3">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            allowFullScreen
            loading="lazy"
            className="mx-auto h-full w-full"
          />
        </div>
        <p className="text-white font-light text-md">{overview}</p>
      </div>
    </main>
  );
}
