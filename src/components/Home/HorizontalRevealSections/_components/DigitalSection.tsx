function DigitalSection() {
  return (
    <div className="w-screen h-screen  flex items-center justify-center relative">

        {/* videos container  */}
        <div  className="flex gap-14 items-center  justify-center" >
            <video  src="https://video.wixstatic.com/video/f415e2_80f8bde926ea42b2a5f74c34ad0e9227/360p/mp4/file.mp4"  className="md:w-[400px]    lg:w-[500px] h-[350px] object-center"  muted autoPlay loop      />
            <video  src="https://video.wixstatic.com/video/f415e2_8d5461eaf6434998bb81499cef575990/360p/mp4/file.mp4"  className="md:w-[200px] lg:lg:w-[250px] h-[350px] object-center"  muted autoPlay loop   />
            <video  src="https://video.wixstatic.com/video/f415e2_b6c148ea03864fa2a5e26267a7b9127c/360p/mp4/file.mp4"  className="md:w-[180px] lg:w-[230px] h-[330px] object-center"  muted autoPlay loop   />
        </div>
        {/* bottom text  */}
        <h2 className="font4 text-[45px] text-black absolute bottom-5 z-10 left-1/2 -translate-x-1/2 pointer-events-none">
        DIGITAL
      </h2>
    </div>
  );
}


export default DigitalSection;