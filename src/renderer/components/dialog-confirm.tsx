
import { Alert, Intent } from '@blueprintjs/core';
import { observer } from 'mobx-react';
import * as React from 'react';

import { AppState } from '../state';

export interface ConfirmDialogProps {
  appState: AppState;
}

export interface ConfirmDialogState {
}

/**
 * The token dialog prompts the user to either continue or cancel the operation.
 * It's also responsible for checking if the token is correct.
 *
 * @export
 * @class ConfirmDialog
 * @extends {React.Component<ConfirmDialogProps, ConfirmDialogState>}
 */
@observer
export class ConfirmDialog extends React.Component<ConfirmDialogProps, ConfirmDialogState> {
  constructor(props: ConfirmDialogProps) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  public onClose(result: boolean) {
    this.props.appState.confirmationPromptLastResult = result;
    this.props.appState.toogleConfirmationPromptDialog();
  }

  public render() {
    const { isConfirmationPromptShowing, confirmationDialogTexts } = this.props.appState;
    
    return (
      <Alert 
        isOpen={isConfirmationPromptShowing}
        onClose={this.onClose}
        icon='help'
        confirmButtonText={confirmationDialogTexts.ok}
        cancelButtonText={confirmationDialogTexts.cancel}
        intent={Intent.PRIMARY}
      >
        <p>{confirmationDialogTexts.label}</p>
      </Alert>
    );
  }
}
