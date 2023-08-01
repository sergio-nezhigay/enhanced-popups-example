import React from "react";
import { Formik, Form, Field } from "formik";

const withPopupEnhancement = (WrappedComponent) => {
  return function EnhancedPopup(props) {
    return (
      <div className="popup-container">
        <h2>{props.title}</h2>
        <button onClick={props.onClose}>Закрити</button>
        <div className="modal-content">
          <Formik
            initialValues={props.initialValues || {}}
            onSubmit={props.onSubmit}
          >
            <Form>
              <WrappedComponent {...props} />
            </Form>
          </Formik>
        </div>
      </div>
    );
  };
};

const InputPopupContent = () => (
  <>
    <label>Email:</label>
    <Field type="text" name="email" />

    <label>Коментар:</label>
    <Field as="textarea" name="comment" />

    <button type="submit">Submit</button>
  </>
);

const AnotherInputPopupContent = () => (
  <>
    <label>Task Title:</label>
    <Field type="text" name="title" />

    <label>Description:</label>
    <Field as="textarea" name="description" />

    <label>Color:</label>
    <Field as="select" name="color">
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </Field>

    <label>Deadline:</label>
    <Field type="date" name="deadline" />

    <button type="submit">Submit</button>
  </>
);

const EnhancedInputPopup = withPopupEnhancement(InputPopupContent);
const EnhancedAnotherInputPopup = withPopupEnhancement(
  AnotherInputPopupContent
);

const App = () => {
  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div>
      {/* Example usage of EnhancedInputPopup */}
      <EnhancedInputPopup
        title="Input Popup"
        initialValues={{ email: "", comment: "" }}
        onSubmit={handleFormSubmit}
        onClose={() => console.log("Input Popup Closed")}
      />

      {/* Example usage of EnhancedAnotherInputPopup */}
      <EnhancedAnotherInputPopup
        title="Another Input Popup"
        initialValues={{
          title: "",
          description: "",
          color: "red",
          deadline: "",
        }}
        onSubmit={handleFormSubmit}
        onClose={() => console.log("Another Input Popup Closed")}
      />
    </div>
  );
};

export default App;
