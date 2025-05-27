const BottomContents = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex items-center gap-3">
                <span>お問い合わせ</span>
              </div>
            </button>

            <button className="group relative bg-white border-2 border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-600 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span>詳細を見る</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomContents;
