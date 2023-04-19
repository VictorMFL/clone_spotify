const Footer = () => {
  return (
    <footer className="h-20 bg-slate-800 shadow-sm w-full text-white fixed bottom-0 flex justify-between items-center p-4 rounded-md">
      <section className="flex items-center w-1/3">
        <div className="flex items-center justify-center w-16 h-16 bg-slate-500">
          img
        </div>
        <div className="mx-4">
          <p>Grade A (feat. JAWNY)</p>
          <p className="font-extralight">Splll tab, JAWNY</p>
        </div>
        <span className="material-symbols-outlined cursor-pointer">
          favorite
        </span>
      </section>

      <section className="w-1/3">
        <div className="flex justify-center items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer">
            cached
          </span>
          <span className="material-symbols-outlined cursor-pointer">
            arrow_back
          </span>
          <span className="material-symbols-outlined cursor-pointer">
            play_circle
          </span>
          <span className="material-symbols-outlined cursor-pointer">
            arrow_forward
          </span>
          <span className="material-symbols-outlined cursor-pointer">laps</span>
        </div>
        <div className="flex justify-center items-center">
          <p>0:33</p>
          <div className="bg-gray-500 w-full h-2 mx-2 rounded-lg">
            <div className="bg-white w-1/3 h-2 rounded-lg"></div>
          </div>
          <p>1:46</p>
        </div>
      </section>

      <section className="flex items-center justify-end w-1/3">
        <span className="material-symbols-outlined cursor-pointer">
          speaker_group
        </span>
        <span className="material-symbols-outlined cursor-pointer">
          volume_up
        </span>
        <div className="bg-gray-500 w-1/3 h-1 mx-2 rounded-lg">
          <div className="bg-white w-1/3 h-1 rounded-lg"></div>
        </div>
        <span className="material-symbols-outlined cursor-pointer">
          pan_zoom
        </span>
      </section>
    </footer>
  );
};

export default Footer;
