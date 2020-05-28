import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { ResetForm } from './resetForm';
import { isValidReset } from '../../api/resetPass';
import { ResetEntity, createEmptyReset } from '../../model';
import { NotificationComponent } from '../../common/components/notification';
import { CenteredView } from '../../layout';

interface Props extends RouteComponentProps<any> {
}

interface State {
  resetInfo: ResetEntity;
  showResetFailedMsg: boolean;
}

export class ResetPass extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			resetInfo: createEmptyReset(),
			showResetFailedMsg: false
		};
	}

	private onReset = () => {
		if (isValidReset(this.state.resetInfo)) {
			this.props.history.push('/about');
		} else {
			this.setState({
				...this.state,
				showResetFailedMsg: true,
			});
		}
	}

	private onUpdateResetField = (name, value) => {
		this.setState({
			resetInfo: {
				...this.state.resetInfo,
				[name]: value,

			},
		});
	}

	public render() {
		return (
			<CenteredView>
				<NotificationComponent
					message="Invalid input, please type again"
					show={this.state.showResetFailedMsg}
					onClose={() => this.setState({ showResetFailedMsg: false})}
				/>

				<Card>
					<CardHeader title="Reset Password" />
					<CardContent>
						<ResetForm
							onReset={this.onReset}
							onUpdateResetField={this.onUpdateResetField}
							resetInfo={this.state.resetInfo}
						/>
					</CardContent>
				</Card>
			</CenteredView>
		);
	}

}