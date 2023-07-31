import React, { useEffect, useState } from 'react'
import { Button, Drawer,Descriptions, Badge, Divider, Modal } from 'antd';
import { Upload } from 'antd';
import {v4 as uuidv4} from 'uuid'


const BookViewDetail = (props) => {
    const onClose = () => {
        props.setOpenViewDetail(false);
        props.dataBookDetail(null);
      };



    const getBase64 = (file) =>
    new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result );
    reader.onerror = (error) => reject(error);
  });
  
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if(props.dataBookDetail) {
        let imgThumbnail = {}, imgSlider = [];
        if(props.dataBookDetail.thumbnail) {
            imgThumbnail = {
                uid: uuidv4(),
                name: props.dataBookDetail.thumbnail,
                status: 'done',
                url: `${import.meta.env.VITE_BACKEND_URL}/images/book/${props.dataBookDetail.thumbnail}`,
            }
        }

        if(props.dataBookDetail.slider && props.dataBookDetail.slider.length > 0 ) {
            props.dataBookDetail.slider.map(item => {
                imgSlider.push({
                    uid: uuidv4(),
                    name: item,
                    status: 'done',
                    url: `${import.meta.env.VITE_BACKEND_URL}/images/book/${item}`,
                })
            })
        }
        setFileList([imgThumbnail, ...imgSlider])
    }
  }, [props.dataBookDetail])

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file)=> {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || (file.preview));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) =>
    {
        setFileList(newFileList);
    }

 
  return (
    <div>
       <Drawer
       width={'50vw'}
        title="Xem chi tiết sách (Book)"
         placement="right"
         onClose={onClose}
         open = {props.openViewDetail}
        //  size={props.size}
          >
      <Descriptions column={2} bordered>
    <Descriptions.Item label="_id">
        {props.dataBookDetail._id}
        </Descriptions.Item>

    <Descriptions.Item label="Tên sách">
    {props.dataBookDetail.mainText}
        </Descriptions.Item>
    <Descriptions.Item label="Tác giả">
    {props.dataBookDetail.author}
    </Descriptions.Item>
    <Descriptions.Item label="Giá tiền">
    {props.dataBookDetail.price}
        </Descriptions.Item>

        <Descriptions.Item label="Thể loại" span={3}>
    <Badge 
    status="processing" text = {props.dataBookDetail.category}>  
            </Badge>
    </Descriptions.Item>
    <Descriptions.Item label="createdAt">
    {props.dataBookDetail.createdAt}
        </Descriptions.Item>
    <Descriptions.Item label="updatedAt">
    {props.dataBookDetail.updatedAt}
        </Descriptions.Item>
  </Descriptions>
  <Divider orientation='left'>Ảnh books</Divider>
  <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        showUploadList = {
            {showRemoveIcon: false}
        }
      >
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
      </Drawer>
    </div>
  )
}

export default BookViewDetail
