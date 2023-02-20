import { useNavigate, useParams } from "react-router-dom";
import { useState, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { useGetPetQuery } from "./petApiService";
import { adopt } from "./adoptedPetSlice";
import { useDispatch } from "react-redux";
import Carousel from "./Carousel";

const Modal = lazy(() => import("./Modal"));

const Details = () => {
  const { id } = useParams();
  if (!id) throw new Error("No ID!");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { isLoading, data: pet } = useGetPetQuery(id);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  if (!pet) throw new Error("No PET!");

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(adopt(pet));
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}
