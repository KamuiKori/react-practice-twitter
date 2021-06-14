import React from 'react'

export default class PostListItem extends React.Component {


    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props
        let classNames = 'app-list-item d-flex justify-content-between'
        if(important){
            classNames += ' important'
        }
        if(like){
            classNames += ' like'
        }
        return(
            <div>
                <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}
                >
                    {label}
                </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={onToggleImportant}
                        >
                            <span>Отметить</span>
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={onDelete}
                        >
                            <span>Удалить</span>
                        </button>
                        <span>Лайков:</span>
                    </div>
                </div>
            </div>
        )
    }
}