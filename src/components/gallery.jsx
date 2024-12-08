import { useNavigate } from 'react-router-dom';
import React from 'react';

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <header className="bg-red-600 text-white p-5 fixed top-0 w-full z-10 shadow-md text-center flex justify-center">
        <div className="container mx-auto">
          <a onClick={() => navigate('/')} className="text-4xl font-bold hover:text-5xl duration-500 cursor-pointer">
            Shawarmania
          </a>
        </div>
      </header>

      <h1 className="text-5xl font-bold text-center mt-20 py-6 mb-2">Gallery</h1>
      <p className="text-xl text-center py-8 px-10">Explore our collection of images showcasing Shawarmania's best moments!</p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        
        <div className="border-4 hover:shadow-xl transition-transform  border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://files.oaiusercontent.com/file-4gD5rPonnJopYN7oSOaQqkAo?se=2024-11-08T17%3A07%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da2832a93-0cc9-4a10-ac48-05a354c690fb.webp&sig=TrWUBGJqkQzrNWmtp1jIPkN44krQadVuYER9eTcEi8w%3D" alt="Shawarma 1" className="w-full h-64 object-cover" />
        </div>

        <div className="border-4 hover:shadow-xl transition-transform  border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://files.oaiusercontent.com/file-O1cWdYAgjWp7EQFavbBGFfNf?se=2024-11-08T17%3A12%3A04Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd3228cca-b178-4519-9985-80e6d056b522.webp&sig=Q7ch%2BbfTfhNGfas2DNnQcc64lOO%2BnNXUD7T%2BpUOOvbA%3D" alt="Shawarma 2" className="w-full h-64 object-cover" />
        </div>

        <div className="border-4 hover:shadow-xl transition-transform border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://cdn.gencraft.com/prod/user/f2aded9d-1195-426b-bd1b-5b98bd6c8b0a/6ab3ec40-0249-4141-9536-08f2a2fc4e95/image/image1_0.jpg?Expires=1731174403&Signature=LzMDOQNw3V4m3Yg7qrESMfwKksb-p8p-l8BsRhKJY9RZi3OE~AIWrGwa7Aih9CgEfHY1a64NjRN88~JTY~dzDncsnukJlRWjBmKOZIQoLtYutqDa~DgZfccmGWvGszFDZLHzASqZTR3qNXwHzB~cOmUycW1LauTqLW2x4W2wPcmxOcPa8g~3jGDx2IOQ-xBXzKDlA2tyPDXZJ8WtNFJL0mdJop3tc7Qc6qVbzmT8ybzZuMHp8mRczIXi-WUMyjBGPyUzYPYfaamNzn2IbznHrXsPyz7S~b~SukGLpmH4KQMPtoLpLaQvk60uQhXyxHZ-LYKoMBmSZItSBnaj3i6QIQ__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="Shawarma 3" className="w-full h-64 object-cover" />
        </div>

        <div className="border-4 hover:shadow-xl transition-transform border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://cdn.gencraft.com/prod/user/f2aded9d-1195-426b-bd1b-5b98bd6c8b0a/6ab3ec40-0249-4141-9536-08f2a2fc4e95/image/image0_0.jpg?Expires=1731174403&Signature=eCY8VS-t7S3PDBV7-ElsPs6B28aPDI-xOJWMpFgysN~WADzuYh9Gy5h9NxDaQQ1ZGfq-9b-qxJ8UerB2g8h6e1kUgt792J7ZnmgdSFik3L1Q47wNoZ4iONCHY~GZp49-dkSDmNpG2g8tXHggm-l3IzRemBpu1ZawhEdewhuQ-Z15zidgIQ15tP3D~5gweAtBB2P-xlP8Hq3X5HutOobHARR6vhNNUDZsNAZ4UFX9SD0WbwknfIBiuaSikVcBp~W0Ll0mivJHBMIreKk78AgPAFD9OgAXyM5ReA7QDr9VFwu6MrhqID3Pyrnb1awUYMjOGPyQo10Br1DHLwqjCte~~Q__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="Shawarma 4" className="w-full h-64 object-cover" />
        </div>

        <div className="mb-10 border-4 hover:shadow-xl transition-transform border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://cdn.gencraft.com/prod/user/f2aded9d-1195-426b-bd1b-5b98bd6c8b0a/2f17aed5-005a-4331-af11-274e1a6e2dbb/image/image1_0.jpg?Expires=1731174495&Signature=dQVHFK4SRN6clSF3q2MYHKxt4teUGjug66AcWMrU9Z7MOgLqfUbRCjZ0UieAPvrdGoN0JDLCkfQ8kijFCdIeXXTh6-l-OVgHvOYCAKv5X7G5fk8-RVh7fNEUSJXSvt9QYW0ybjFQif~gkDb07iwQWxVnf406ULK7GK-sQi7s4gcSkGExgWmm~T67ODwgn4ds-D52YN7VOSUK0jVdZjMYNQ4haIDlRQinqe4jvpzOxWkvWTc9lhLO5JAasJ-jpeFtKi5lvQvabPQpL~9cJ24UFU-Cdqbn429dpg78f72GnIqDWiH-d0~VMEDyxA1v~OEHkrfnzQVts-nXsQ3aSv~aWQ__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="Shawarma 5" className="w-full h-64 object-cover" />
        </div>

        <div className="mb-10 border- hover:shadow-xl transition-transform border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://cdn.gencraft.com/prod/user/f2aded9d-1195-426b-bd1b-5b98bd6c8b0a/91b39447-6201-4d86-bfde-89f48aedd206/image/image1_0.jpg?Expires=1731174674&Signature=HYSD7h9j2eM13UJM~yI9BvH~EH-lDHbGO2ZBirQUZBdWBXpz4NVCIRnu5XwQKJ185-7-wTwt~ErEwTepmlUDb7kmKbH8ychvD6jG8lECk0D8ERknNGvy5Yqk9pjlYF~1Kwrsv4v4eBl18WQQdYz1fe-5S4Xei2RfLhJlI7dg-xTTA4CT74M79~12boNZqPHqdKwMfywNROwSxtOWdDnc8naKwzRb794P2N-xBBzyWU9jnW2hX0QtYuFY~WqI3IxIs0AdqxKgnVV9ks3d3~LY3rilmSt9qfbIGT-XE0RFkzx2GAVmCpRi~Z47V0CxQmfvXMRn0S8uFFfDo4Es7KEAnQ__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="Shawarma 6" className="w-full h-64 object-cover" />
        </div>

        <div className="mb-10 border-4 hover:shadow-xl transition-transform border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://cdn.gencraft.com/prod/user/f2aded9d-1195-426b-bd1b-5b98bd6c8b0a/8876434e-9d20-4b0b-833e-4148ae8bdbcf/image/image1_0.jpg?Expires=1731174741&Signature=Cj4bgPSOffkacZl4KBRZkzEONVmJSTxVE~YyPuS4bcU17xwxbFq2cQ1yKBIILmVsdo1xAQbs76G1jCWahmnc8GJlXuu-jfjcMju6zMW3-W0DsYloZvLfN9MmWkVW1VS2yqB7Gi6VZft5WAuOecVB5UYG3UmgOcc4m4usnPt0Qie4xjJf1hxe74kpyT-VFt-bTltfs9Vz19TxhDj~OV0vYvoPuF3DOkASKIvhWOmpSd8YPkOqUWySQXCE~QsCbXXBN9kxZyxIHPfJKH2B7iFgTmDj5p0Ogl75yLu4mcnN83qwZtrV5ti6eNGLhqSR2eaec0QA1YvyK8dzCecX02ppdg__&Key-Pair-Id=K3RDDB1TZ8BHT8  " alt="Shawarma 7" className="w-full h-64 object-cover" />
        </div>

        <div className="mb-10 border-4 hover:shadow-xl transition-transform border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img src="https://cdn.gencraft.com/prod/user/f2aded9d-1195-426b-bd1b-5b98bd6c8b0a/8876434e-9d20-4b0b-833e-4148ae8bdbcf/image/image0_0.jpg?Expires=1731174741&Signature=DeHUmMTCwOvE3lhn6bgkbZI3NNNwb367Zq1cQHws693L4BVvPnWTO9t2QFdcO9qZGCqIAvveRk2yre54u4CsjDwDEOo65FyHEZ5soQJwwQkVJyXA-m-lxqInog4KK6YO39d~-2hpQ1ZLNMbNEVVo8s5dSaL0oblYMuZO9X-txQ3Xg8bvKf2mU-7664Kvce26VyrOA3FsqyhcxAehxKs3LxGzGxgGe06J5u1~n2L2ZnMBBdElC2EoBP3sWh5TgPwsHA7dnNS1mWevPma0hD0iqMTRa911CrYifROlBc7bmBiJ182hYKsZvsOyi7TTHmJkEX4AU2CtI3to5WS3VR4v6w__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="Shawarma 8" className="w-full h-64 object-cover" />
              </div>
              

        
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={() => navigate('/')}
              className="bg-red-600 text-white text-2xl px-6 py-3 rounded-md font-semibold hover:bg-red-700 hover:text-3xl ease-in-out duration-500 "
            >
              Back
            </button>
          </div>
          
    </div>
  );
}

export default Gallery;
