import style from '../css/BoardContents.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const RoomBoardContents = () => {

    const location = useLocation();
    const [boardContents, setBoardContents] = useState({});

    useEffect(() => {
        axios.get(`/api/board/boardContents/${location.state.oriSeq}`).then(resp => {
            setBoardContents(resp.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const [insertReply, setInsertReply] = useState({contents:"",parentSeq:location.state.oriSeq});
    const insertReplyHandleChange = (e) => {
        setInsertReply(prev=>({...prev,contents:e.target.value}));
    }

    const insertReplyAdd = () => {
        axios.post("/api/reply",insertReply).then(resp=>{
            alert("댓글 등록 성공");
        }).catch(err=>{
            alert("댓글 등록 실패");
            console.log(err);
        })
    }

    return (
        <>
            <div className={style.boardContentsTitle}>
                <span>[{boardContents.header}]</span>
                {boardContents.title}
            </div>
            <div className={style.boardContentsInfo}>
                <div>
                글 번호 {location.state.sysSeq} | 작성자 {boardContents.writer} | 날짜 {boardContents.writeDate ? boardContents.writeDate.split("T")[0] : ""}
                </div>
                <div>
                    <button>삭제</button>
                </div>
            </div>
            <div className={style.boardContentsDiv} dangerouslySetInnerHTML={{ __html: boardContents.contents }}>
            </div>
            <div>
                <Link to="/board/toRoomBoardList"><button>뒤로가기</button></Link>
                <button>수정하기</button>
            </div>
            <hr />
            <div>
                <div className={style.insertReplyDiv}>
                    <div>
                        <textarea placeholder="댓글을 입력해주세요" onChange={insertReplyHandleChange}/>
                    </div>
                </div>
                <div>
                    <button>등록</button>
                </div>
            </div>
            <hr/>
            <div className={style.replyBoxFirst}>
                <div className={style.replyInfo}>
                    <div>test0000</div>
                    <div>2023.12.06</div>
                </div>
                <div>
                    댓글내용
                </div>
                <div>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
            <div className={style.replyBox}>
                <div className={style.replyInfo}>
                    <div>test0000</div>
                    <div>2023.12.06</div>
                </div>
                <div>
                    댓글내용
                </div>
                <div>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
            <div className={style.naviFooter}>
                &lt; 1 2 3 4 5 6 7 8 9  10 &gt;
            </div>
        </>
    )
}

export default RoomBoardContents;