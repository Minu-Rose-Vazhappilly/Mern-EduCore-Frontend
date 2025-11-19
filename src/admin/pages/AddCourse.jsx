import React, { useState, useEffect } from "react";
import AdminHeader from "../../admin/components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer,toast } from 'react-toastify'
import { addCourseAPI } from "../../services/allAPI";

function AddCourse() {
  
  const [token, setToken] = useState("");
  const [previewList, setPreviewList] = useState([]);
  const [preview,setPreview] = useState({
    previewed:""
  })
  const [imgPreview,setImgPreview] = useState("")
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
        pdfs: [{ pdftitle: "" }],
      },
    ],videoUrl: [],
    fileUrl:[]
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
    if(field == "thumbnail"){
      const url = URL.createObjectURL(value)
      console.log(url);
      setImgPreview(url)
      
    }
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
  
  
    }else if(field == "fileUrl"){
      const filePdfArray = [...courseDetails.fileUrl]
    filePdfArray.push(value)
    setCourseDetails((prev)=>({...prev,modules: updatedModules,fileUrl:filePdfArray}))
    const url = URL.createObjectURL(value)
  console.log(url);
    }
    else{
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

const handleSubmit = async ()=>{

  const {courseType,courseTitle,courseDescription,price,thumbnail,modules,videoUrl,fileUrl} = courseDetails
  if(!courseType || !courseTitle || !courseDescription || !price || !thumbnail || modules.length == 0 || videoUrl.length !== modules.length || fileUrl.length !== modules.length || modules.some(
    (mod) =>
      !mod.moduleTitle ||
       !mod.moduleDescription ||
       !mod.videos[0].videotitle ||
       !mod.pdfs[0].pdftitle
  )){
    toast.info("Please fill the form !!!")
  }else{
      const reqHeader = {
            "Authorization":`Bearer ${token}`
          }
      const reqBody = new FormData()
      for (let key in courseDetails) {
  if (key === "modules") {
    reqBody.append("modules", JSON.stringify(courseDetails.modules));
  } else if (key === "videoUrl") {
    courseDetails.videoUrl.forEach(video => reqBody.append("videoUrl", video));
  } else if (key === "fileUrl") {
    courseDetails.fileUrl.forEach(file => reqBody.append("fileUrl", file));
  } else {
    reqBody.append(key, courseDetails[key]);
  }
}
try{
    const result = await addCourseAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status == 401){
      toast.warning(result.response.data)

    }else if(result.status == 200){
      toast.success("Course Added Successfully")
    }else{
      toast.error("Something went wrong")
    }
    
  }
  catch(err){
 console.log(err);
 
  }
  }

  

}

const handleReset = async()=>{
  setCourseDetails({
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
        pdfs: [{ pdftitle: "" }],
      },
    ],videoUrl: [],
    fileUrl:[]
  })
  setImgPreview("")
  setPreviewList([])
}
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
    <div className="font-bold"  style={{backgroundImage:`url("https://cdn.wallpapersafari.com/9/77/1UDgMj.jpg")`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <AdminHeader />
      <div className="md:grid grid-cols-3">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-2 p-5">
          <form>
            {/* Course Details */}
            <div className="mb-2">
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
              /><br/>
              <input
                type="number"
                placeholder="Price"
                className="border border-gray-300 rounded-lg md:w-40 w-full p-2 mb-2"
                value={courseDetails.price}
                onChange={(e) => handleCourseChange("price", e.target.value)}
              /><br/>
              <label htmlFor="thumbnailCourse">
                <input
                  type="file"
                  onChange={(e) => handleCourseChange("thumbnail", e.target.files[0])}
                  className="mb-4 hidden"
                  placeholder="choose a thumbnail"
                  id="thumbnailCourse"
                />
                Choose a Thumbnail
              </label>
              {
                imgPreview && 
                <img src={imgPreview} alt="" width={"300px"} height={"50px"} />
              }
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
            <div className="flex justify-end w-full px-5">
                        <button type="button" onClick={handleSubmit}  className='bg-amber-600 text-white rounded  border py-3 px-4 hover:text-amber-600 hover:border-amber-600 hover:bg-white me-3'>Submit</button>
                         <button type="button" onClick={handleReset}  className='bg-green-600 text-white rounded  border py-3 px-4 hover:text-green-600 hover:border-green-600 hover:bg-white'>Reset</button>
                    </div>
          </form>

          {/* <pre className="mt-4 bg-gray-100 p-3 rounded">
            {JSON.stringify(courseDetails, null, 2)}
          </pre> */}
        </div>
      </div>
      <Footer />
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      
      />
    </div>
  );
}

export default AddCourse;
