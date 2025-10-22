import React, { useState, useEffect } from "react";
import AdminHeader from "../../admin/components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

function AddCourse() {
  
  const [token, setToken] = useState("");
  const [previewList, setPreviewList] = useState([]);
  const [preview,setPreview] = useState({
    previewed:""
  })
  console.log(previewList);
  
  const [courseDetails, setCourseDetails] = useState({
    courseType: "",
    courseTitle: "",
    courseDescription: "",
    price: "",
    thumbnail: null,
    modules: [
      {
        moduleTitle: "",
        moduleDescription: "",
        videos: [{ videotitle: "" }],
        pdfs: [{ pdftitle: "", fileUrl: null }],
      },
    ],videoUrl: []
  });
  // const [videos,setVideos] = useState([])
  // const handleVideoUrl = (e)=>{
  //   const fileArray = courseDetails.videoUrl
  //   fileArray.push(e.target.files[0])
  //   setCourseDetails({...courseDetails,videoUrl:fileArray})
  //   const url = URL.createObjectURL(e.target.files[0])
  //   console.log(url);
  //   setPreview(url)
  //   const courseVideoArray = previewList
  //   courseVideoArray.push(url)
  //   setPreviewList(courseVideoArray)
    

  // }
  
console.log(courseDetails);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  // Update course fields
  const handleCourseChange = (field, value) => {
    setCourseDetails((prev) => ({ ...prev, [field]: value }));
  };

  

  // Update module fields
  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...courseDetails.modules];
    updatedModules[index][field] = value;
    setCourseDetails((prev) => ({ ...prev, modules: updatedModules }));
  };

  const deleteModule = (index) => {
    const updatedModules = courseDetails.modules.filter((_, i) => i !== index);
    const updatedVideos = courseDetails.videoUrl.filter((_,i)=> i !== index)
    setCourseDetails((prev) => ({ ...prev, modules: updatedModules,videoUrl:updatedVideos }));
    setPreviewList((prev) => prev.filter((_, i) => i !== index));
  };

  // Update nested video/pdf fields
  const handleNestedChange = (moduleIndex, type, nestedIndex, field, value) => {
     
    const updatedModules = [...courseDetails.modules];
    const fileArray = [...courseDetails.videoUrl]
    // updatedModules[moduleIndex][type][nestedIndex][field] = value;
    if(field == "videoUrl"){
      const fileArray = [...courseDetails.videoUrl]
    fileArray.push(value)
    setCourseDetails((prev)=>({...prev,modules: updatedModules,videoUrl:fileArray}))
    const url = URL.createObjectURL(value)
  console.log(url);
  // setPreviewList((prev) => {
  //     const updated = [...prev];
  //     updated[moduleIndex] = url; // only update current module’s preview
  //     return updated;
  //   });
  
  
    }else{
      const updatedModules = [...courseDetails.modules];
    updatedModules[moduleIndex][type][nestedIndex][field] = value;
    setCourseDetails((prev) => ({ ...prev, modules: updatedModules,videoUrl:fileArray }));
    }
    
    
  };
  const handlePreview = (moduleIndex, file) => {
  const url = URL.createObjectURL(file);
  setPreview(url)
  
  // Create a copy of previewList
  const updatedPreviews = [...previewList];
  
  // Assign preview to correct module
  // updatedPreviews[moduleIndex] = url;
  
  setPreviewList((prev)=>[...prev,updatedPreviews[moduleIndex] = url]);
};


  // Add new module
  const addModule = () => {
    setCourseDetails((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        {
          moduleTitle: "",
          moduleDescription: "",
          videos: [{ videotitle: ""}],
          pdfs: [{ pdftitle: "", fileUrl: null }],
        },
      ]
    }));
    
  };

  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-3">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-2 p-5">
          <form>
            {/* Course Details */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Course Type"
                className="border border-gray-300 rounded-lg md:w-100 w-full p-2 mb-2"
                value={courseDetails.courseType}
                onChange={(e) => handleCourseChange("courseType", e.target.value)}
              />
              <input
                type="text"
                placeholder="Course Title"
                className="border border-gray-300 rounded-lg md:w-100 w-full p-2 mb-2"
                value={courseDetails.courseTitle}
                onChange={(e) => handleCourseChange("courseTitle", e.target.value)}
              />
              <textarea
                placeholder="Course Description"
                className="border border-gray-300 rounded-lg md:w-100 w-full p-2 mb-2"
                value={courseDetails.courseDescription}
                onChange={(e) =>
                  handleCourseChange("courseDescription", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Price"
                className="border border-gray-300 rounded-lg md:w-40 w-full p-2 mb-2"
                value={courseDetails.price}
                onChange={(e) => handleCourseChange("price", e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => handleCourseChange("thumbnail", e.target.files[0])}
                className="mb-4"
              />
            </div>

            {/* Modules */}
            {courseDetails.modules.map((mod, index) => (
              
              <div
              
                key={index}
                className="bg-gray-200 p-2 w-full rounded-lg shadow-lg mt-4"
              >
                <h3 className="font-semibold mb-2">Module {index + 1}
                    <button
                    type="button"
                    onClick={() => deleteModule(index)}
                    className="text-red-500 hover:text-red-700 flex items-center"
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-1" /> Delete
                  </button>
                </h3>

                <input
                  type="text"
                  placeholder="Module Title"
                  className="border border-gray-300 rounded-lg md:w-100 w-full p-1 mb-2"
                  value={mod.moduleTitle}
                  onChange={(e) => handleModuleChange(index, "moduleTitle", e.target.value)}
                />
                <textarea
                  placeholder="Module Description"
                  className="border border-gray-300 rounded-lg md:w-100 w-full p-1 mb-2"
                  value={mod.moduleDescription}
                  onChange={(e) =>
                    handleModuleChange(index, "moduleDescription", e.target.value)
                  }
                />

                {/* Video Upload */}
                {mod.videos.map((video, vIndex) => (
                  <div key={vIndex} className="mb-2">
                    <input
                      type="text"
                      placeholder="Video Title"
                      className="border w-full p-1 mb-1 rounded"
                      value={video.videotitle}
                      onChange={(e) =>
                        handleNestedChange(index, "videos", vIndex, "videotitle", e.target.value)
                      }
                    />
                    <label htmlFor="UploadVideo">
                        <input
                          type="file"
                          onChange={(e) =>{
                              handleNestedChange(index, "videos", vIndex, "videoUrl", e.target.files[0])
                        handlePreview(vIndex, e.target.files[0])
                          }
                        
                      }
                      
                          className="mb-2 hidden"
                          id="UploadVideo"
                        />
                        {
                              previewList[index]   ?
                              
                              <video src={previewList[index]} alt=""  />
                              :
                              <p>
                                
                                
                                <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" width={'70px'} height={'70px'} alt="" />
                                
                              </p>

                              
                              
                              
                        }
                        
                    </label>
                  </div>
                ))}

                {/* PDF Upload */}
                {mod.pdfs.map((pdf, pIndex) => (
                  <div key={pIndex} className="mb-2">
                    <input
                      type="text"
                      placeholder="PDF Title"
                      className="border w-full p-1 mb-1 rounded"
                      value={pdf.pdftitle}
                      onChange={(e) =>
                        handleNestedChange(index, "pdfs", pIndex, "pdftitle", e.target.value)
                      }
                    />
                    <input
                      type="file"
                      onChange={(e) =>
                        handleNestedChange(index, "pdfs", pIndex, "fileUrl", e.target.files[0])
                      }
                      className="mb-2"
                    />
                  </div>
                ))}
              </div>
            ))}

            <button
              type="button"
              onClick={addModule}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 flex items-center"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Module
            </button>
          </form>

          {/* <pre className="mt-4 bg-gray-100 p-3 rounded">
            {JSON.stringify(courseDetails, null, 2)}
          </pre> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddCourse;
