import React from "react";
import { GITHUB_LINK, MAIL_TO } from "../constants";
import { Drawer, IconButton, Typography } from "@material-ui/core";
import { GitHub, MailOutline } from "@material-ui/icons";

interface AboutProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const About = ({ isOpen, onClose }: AboutProps) => {
  const onClickMail = () => window.open(MAIL_TO);

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={onClose}>
      <div dir="rtl" className="about">
        <div className="instructions">
          <Typography variant="subtitle1">
            <b>הוראות</b>
          </Typography>
          <Typography variant="subtitle1">כאן יהיה הוראות</Typography>
        </div>
        <Typography variant="subtitle1">
          <IconButton onClick={onClickMail} style={{ color: "white" }}>
            <MailOutline />
          </IconButton>
          <a href={GITHUB_LINK}>
            <IconButton style={{ color: "white" }}>
              <GitHub />
            </IconButton>
          </a>
        </Typography>
      </div>
    </Drawer>
  );
};
