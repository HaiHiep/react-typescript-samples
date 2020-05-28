import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { ResetEntity } from '../../model';
import styles from './resetForm.styles';

interface Props extends WithStyles<typeof styles> {
	onReset: () => void;
	onUpdateResetField: (name: string, value: any) => void;
	resetInfo: ResetEntity;
}

const ResetFormInner: React.StatelessComponent<Props> = (props: Props) => {

	const onTextFieldChange = (fieldId) => (e) => {
		props.onUpdateResetField(fieldId, e.target.value);
	}

	return (
		<div className={props.classes.container}>
			<TextField
				label="oldpass"
				type="password"
				margin="normal"
				value={props.resetInfo.oldpass}
				onChange={onTextFieldChange('oldpass')}
			/>
			<TextField
				label="newpass"
				type="password"
				margin="normal"
				value={props.resetInfo.newpass}
				onChange={onTextFieldChange('newpass')}
			/>
			<TextField
				label="newpassconfirm"
				type="password"
				margin="normal"
				value={props.resetInfo.newpassconfirm}
				onChange={onTextFieldChange('newpassconfirm')}
			/>
			<Button variant="contained" color="primary" onClick={props.onReset}>
				Reset
			</Button>
		</div>
	);
}

export const ResetForm = withStyles(styles)(ResetFormInner);
