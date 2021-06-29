import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import React from 'react'
import { BiHeart } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"
import { useStyles } from './article-component.styles'

dayjs.extend(relativeTime);

function ArticleComponent(props) {
    const {
        title,
        cover_image,
        tag_list,
        url,
        comments_count,
        positive_reactions_count,
        public_reactions_count,
        user,
        published_at,
    } = props.data;
    const classes = useStyles();
    return (
        <article className={classes.article}>
            {
                cover_image && (
                    <a
                        href={url}
                        style={{
                            backgroundImage: `url(${cover_image})`,
                        }}
                        className={classes.acticleImage}
                    >
                        &nbsp;
                    </a>
                )
            }
            <div className={classes.details}>
                <div className={classes.uPic}>
                    <img src={user?.profile_image_90} alt="" />
                </div>
                <div className={classes.uDetails}>
                    <a href={`http://dev.to/${user?.username}`}>
                        <span className={classes.uInfo}>{user?.username}</span>
                    </a>
                    <a href={url}>
                        <span className={classes.uInfo}>
                            {new Date(published_at).toLocaleDateString(undefined, {
                                day: "numeric",
                                month: "long",
                            })}
                            &nbsp; ({dayjs(published_at).fromNow()})
                        </span>
                    </a>
                    <a href={url}>
                        <h3 className={classes.title}>{title}</h3>
                    </a>

                    <div className={classes.tags}>
                        {tag_list.map((tag, id) => {
                            return (
                                <a key={id} href={`https://dev.to/t/${tag}`}>
                                    <span className={classes.tag}>#{tag}</span>
                                </a>
                            );
                        })}
                    </div>

                    <div className={classes.addtionalDetails}>
                        <div className={classes.reactions}>
                            {public_reactions_count + positive_reactions_count > 0 && (
                                <a href={url}>
                                    <span>
                                        <i>
                                            <BiHeart />
                                        </i>
                                        &nbsp;
                                        {public_reactions_count + positive_reactions_count} &nbsp;
                                        <span className={classes.hiddenMobile}>reactions</span>
                                    </span>
                                </a>
                            )}

                            <a href={url}>
                                <span>
                                    <i>
                                        <FaRegComment />
                                    </i>
                                    &nbsp;
                                    {comments_count > 0 ? (
                                        <span>
                                            {comments_count} &nbsp;
                                            <span className={classes.hiddenMobile}>comments</span>
                                        </span>
                                    ) : null}
                                    {comments_count === 0 ? (
                                        <span>
                                            <span className={classes.showMobile}>{comments_count}</span>
                                            &nbsp;
                                            <span className={classes.hiddenMobile}>Add comment</span>
                                        </span>
                                    ) : null}
                                </span>
                            </a>
                        </div>

                        <div className={classes.save}>
                            <small>1 min read</small>
                            <button>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticleComponent
