import React from "react";
import Button from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button variant="primary" label={"Primary"} />;
export const Secondary = () => (
  <Button variant="secondary" label={"Secondary"} />
);
export const Success = () => <Button variant="success" label={"Success"} />;
export const Danger = () => <Button variant="danger" label={"Danger"} />;
export const Back = () => <Button variant="secondary" label={"Back"} />;
