import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import imagePlaceholder from '../assets/imagePlaceholder.png';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const userId = localStorage.getItem('userId');
  const url1 = `https://667ba97dbd627f0dcc9358df.mockapi.io/users/${userId}`;
  const [imageUrl, setimageUrl] = useState(imagePlaceholder);
  const [inputImageUrl, setinputImageUrl] = useState('');
  const [errorAlert, seterrorAlert] = useState(false);
  const [editAlert, seteditAlert] = useState(false);
  const [deleteAlert, setdeleteAlert] = useState(false);
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(url1).then((response) => {
      setdata(response.data);
      if (response.data.imgUrl) {
        setimageUrl(response.data.imgUrl);
      }
    });
  }
  function imageChanger(e) {
    setinputImageUrl(e.target.value);
    seterrorAlert(false);
    if (e.target.value == '') {
      setimageUrl(imagePlaceholder);
    } else {
      setimageUrl(e.target.value);
    }
  }

  function changeImage() {
    if (inputImageUrl != '') {
      axios
        .put(url1, {
          imgUrl: inputImageUrl,
        })
        .then((response) => {
          console.log(response.data);
          seteditAlert(true);
          setinputImageUrl('');
          setTimeout(function () {
            seteditAlert(false);
          }, 2000);
        });
    } else {
      seterrorAlert(true);
    }
  }

  function handleDeleteAccount() {
    axios
      .delete(url1)
      .then(() => {
        localStorage.removeItem('userId');
        navigate('../');
      })
      .catch((error) => {
        alert('Failed to delete account: ' + error.message);
      });
  }

  return (
    <>
      <NavBar
        endTitle="Logout"
        endTitleLink="../"
        endDelete={'Delete Account'}
        onClickDelete={() => {
          handleDeleteAccount();
        }}
      />
      {editAlert && (
        <div className="alert alert-success fixed z-50 w-60 top-20 right-5">
          <span>Avatar has been updated</span>
        </div>
      )}
      {deleteAlert && (
        <div className="alert alert-warning fixed z-50 w-96 top-20 right-5 max-md:max-w-[80%] max-md:right-0">
          <span className="">{`Deleting ${data.userName} Account`}</span>
        </div>
      )}

      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content text-center max-md:flex-col-reverse gap-16 shadow-2xl p-10 rounded-lg">
          <div className="avatar flex-col justify-center items-center gap-5 max-md:max-w-screen ">
            <div className="w-[360px] h-[360px] max-md:w-[300px] max-md:h-[300px] max-md:max-w-full max-md:max-h-full">
              {' '}
              <img
                className="w-full h-full object-cover rounded"
                src={imageUrl}
              />
            </div>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Change Avatar</span>
              </div>
              <input
                type="url"
                placeholder="https://image.jpeg"
                className="input input-bordered w-full max-w-xs"
                value={inputImageUrl}
                onChange={(e) => {
                  imageChanger(e);
                }}
              />

              {errorAlert && (
                <label className="text-warning">Invalid URL</label>
              )}
            </label>
            <button
              className="btn btn-primary"
              onClick={() => {
                changeImage();
              }}
            >
              Change Image
            </button>
          </div>
          <div className="self-start">
            <h1 className="text-5xl font-bold text-center mb-8">
              Your Information
            </h1>
            <div className="text-3xl max-md:text-2xl font-bold tracking-wider flex flex-col ">
              <div>
                {' '}
                Name: <span className="text-primary">{data.userName}</span>
              </div>
              <div>
                Email: <span className="text-primary">{data.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;