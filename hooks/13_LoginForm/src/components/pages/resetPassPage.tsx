import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ResetPassEntity, createEmptyReset } from "../model/resetPass";
import { isValidResetPass } from "../api/resetPass";
import { NotificationComponent } from "../common";

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useStyles = makeStyles(theme =>
  createStyles({
	card: {
	  maxWidth: 400,
	  margin: "0 auto"
	}
  })
);

interface Props extends RouteComponentProps {}

const ResetPassPageInner = (props: Props) => {
  const [resetPassInfo, setResetPassInfo] = React.useState<ResetPassEntity>(
	createEmptyReset()
  );
  const [showResetPassFailedMsg, setShowResetPassFailedMsg] = React.useState(false);
  const classes = useStyles();

  const onResetPass = () => {
	if (isValidResetPass(resetPassInfo)) {
	  props.history.push("/");
	} else {
	  setShowResetPassFailedMsg(true);
	}
  };

  const onUpdateResetPassField = (name, value) => {
	setResetPassInfo({
	  ...resetPassInfo,
	  [name]: value
	});
  };

  return (
	<>
	  <Card className={classes.card}>
		<CardHeader title="Reset Pass" />
		<CardContent>
		  <ResetPassForm
			onResetPass={onResetPass}
			onUpdateField={onUpdateResetPassField}
			resetPassInfo={resetPassInfo}
		  />
		</CardContent>
	  </Card>
	  <NotificationComponent
		message="Invalid, please type again"
		show={showResetPassFailedMsg}
		onClose={() => setShowResetPassFailedMsg(false)}
	  />
	</>
  );
};

export const ResetPassPage = withRouter<Props, any>(ResetPassPageInner);

interface PropsForm {
  onResetPass: () => void;
  onUpdateField: (name: string, value: any) => void;
  resetPassInfo: ResetPassEntity;
}

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles(theme =>
  createStyles({
	formContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}
  })
);

const ResetPassForm = (props: PropsForm) => {
	const classes = useFormStyles();
	const { onResetPass, onUpdateField, resetPassInfo } = props;

	// TODO: Enhacement move this outside the stateless component discuss why is a good idea
	const onTexFieldChange = fieldId => e => {
		onUpdateField(fieldId, e.target.value);
	};

	return (
		<div className={classes.formContainer}>
			<TextField
				label="Old Pass"
				type="password"
				margin="normal"
				value={resetPassInfo.oldpass}
				onChange={onTexFieldChange("Old Pass")}
			/>
			<TextField
				label="New Pass"
				type="password"
				margin="normal"
				value={resetPassInfo.newpass}
				onChange={onTexFieldChange("New Pass")}
			/>
			<TextField
				label="New Pass Confirm"
				type="password"
				margin="normal"
				value={resetPassInfo.newpassconfirm}
				onChange={onTexFieldChange("New Pass Confirm")}
			/>
			<Button variant="contained" color="primary" onClick={onResetPass}>
				Reset Pass
			</Button>
		</div>
	);
};
