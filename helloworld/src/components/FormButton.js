import React from 'react';
import Popover from "react-popover";

class FormButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.togglePopover = this.togglePopover.bind(this)
  }

  // ****************************************************************///
  // 詳細を取得
  // ****************************************************************///

  togglePopover() {
    let title = this.props.title
    let tags = this.props.tags
    let savedData = this.props.savedData
    this.setState(
      {
        isOpen: !this.state.isOpen,
      }
    );
      this.props.displayForm
        ? (this.props.resolveUpdate
          ? setTimeout(this.props.resolveUpdate, 1500, savedData)
          : setTimeout(this.props.resolveAdd, 1500, savedData)
          )
        : (this.props.worryUpdate)
          ? (setTimeout(this.props.worryUpdate, 1500, title, tags, savedData))
          : (setTimeout(this.props.addLists, 1500, title, tags, savedData))
  };

  // ****************************************************************///
  // 投稿ボタンが押されたとき
  // ****************************************************************///

  submit = (event) => {
    event.preventDefault();

    this.props.ChangeTrueLoading()
    this.togglePopover()
    setTimeout(this.props.ChangeFalseLoading, 1800)
  }

  // ****************************************************************///
  // render
  // ****************************************************************///

  render() {
    let createButton;
    if (this.props.state === false) {
      createButton = (
        <div className="button-wrapper">
          <button onClick={this.props.ClickDisplayForm} className="button">解決投稿</button>
        </div>
      );
    } else {
      createButton = (
        <div className="button-wrapper">
          <button onClick={this.props.ClickCloseForm} className="first-button button">キャンセル</button>
          <Popover
            isOpen={this.state.isOpen}
            body={
              this.props.displayForm
                ? (this.props.resolveUpdate
                  ? <div className="popover"><p className="popover-text">修正が完了しました！</p><p className="popover-text">その調子！</p></div>
                  : <div className="popover"><p className="popover-text">お疲れ様です！</p><p className="popover-text">その調子！</p></div>)
                : (this.props.worryUpdate)
                  ? (<div className="popover"><p className="popover-text">修正が完了しました</p><p className="popover-text">頑張れー！</p></div>)
                  : (<div className="popover"><p className="popover-text">頑張ってください！</p><p className="popover-text">応援しています！</p></div>)

            }
            place={'above'}
            enterExitTransitionDurationMs={800}
          >
            {
              this.props.displayForm
                ? <button onClick={this.submit} type="submit" className="button">投稿</button>
                : <button disabled={!this.props.canSubmit()} onClick={this.submit} type="submit" className="button">投稿</button>
            }
          </Popover>
        </div>
      );
    }

    return (
      <div>
        {createButton}
      </div>
    );
  }
}

export default FormButton;