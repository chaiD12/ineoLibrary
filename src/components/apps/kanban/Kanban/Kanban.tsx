import React, { useState, useEffect } from "react";
import { NewCardForm } from "../newCardForm/NewCardForm/NewCardForm";
import { Card } from "../Card/Card";
import { LaneHeader } from "../LaneHeader/LaneHeader";
import { AddCardLink } from "../AddCardLink/AddCardLink";
import { NewLaneSection } from "../NewLaneSection/NewLaneSection";
import { NewLaneForm } from "../NewLaneForm/NewLaneForm";
// import { useAppDispatch } from "@app/hooks/reduxHooks";
import { BORDER_RADIUS } from "@app/styles/themes/constants";
import { ActivityModel } from "@app/domain/WorkshopModel";
// import { Workshop } from "@app/api/workshop.api";
import { Workshop } from "@app/store/slices/workshopSlice";
import { BaseButtonsForm } from "@app/components/common/forms/BaseButtonsForm/BaseButtonsForm";
import { Input } from "@app/components/common/inputs/Input/Input";
import { Select, Option } from "@app/components/common/selects/Select/Select";
import { notificationController } from "@app/controllers/notificationController";
import { InputNumber } from "@app/components/common/inputs/InputNumber/InputNumber";
import { Panel } from "@app/components/common/Collapse/Collapse";
import * as s from "@app/pages/uiComponentsPages//UIComponentsPage.styles";
import * as S from "./Kanban.styles";
import { Upload, Button, Col, Row } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadRequestOption as RcCustomRequestOptions } from "rc-upload/lib/interface";
import { UploadChangeParam } from "antd/es/upload";
import { httpApi } from "@app/api/http.api";
import TextArea from 'antd/lib/input/TextArea';
import { route } from "@app/route"
// import { kanbanDifficulty } from "@app/constants/kanbanTags";
// const { high, medium, low } = kanbanDifficulty;
// interface WorkshopProps {
//   data: Workshop;
// }

interface LaneType {
  id: string;
  session_title: string;
  cards: ActivityModel[];
}

export const Kanban: React.FC = () => {
  const [lanes, setLanes] = useState<Workshop>({
  id: '1',
  workshop_title: 'Title',
  uses: 'Business Creation',
  target_skills: 'Computer Skills',
  duration: 1,
  workshop_image: 'string',
  workshop_method: 'Online',
  workshop_description: 'string',
  lanes: [
    {
      id: '00000000-0000-0000-0000-000000000000',
      session_title: 'Day 1',
      cards: [
        {
         id:'00000000-0000-0000-0000-000000000000',
          activity_title: 'activity title',
          activity_method: 'Presential',
          activity_technique: [
            "Business simulation"
          ],
          activity_difficulty: [],
          activity_duration: '2',
          activity_objectives: 'activity objectives',
          activity_needs: 'Metaplan cards',
          activity_organization: 'activity organization',
          activity_variations: 'activity variations',
          activity_description:'activity description',
          created_at: '2023-02-25T01:32:26.497858Z'
        }
      ]
    }
  ],
  created_at: '2023-02-25T01:32:26.486721Z',
  updated_at: '2023-02-25T01:32:26.486751Z',
  deleted_at: 'null'
});
  const [workshop, setWorkshop] = useState<Workshop>({
  id: '1',
  workshop_title: 'Title',
  uses: 'Business Creation',
  target_skills: 'Computer Skills',
  duration: 1,
  workshop_image: 'string',
  workshop_method: 'Online',
  workshop_description: 'string',
  lanes: [
    {
      id: '00000000-0000-0000-0000-000000000000',
      session_title: 'Day 1',
      cards: [
        {
         id:'00000000-0000-0000-0000-000000000000',
          activity_title: 'activity title',
          activity_method: 'Presential',
          activity_technique: [
            "Business simulation"
          ],
          activity_difficulty: [],
          activity_duration: '2',
          activity_objectives: 'activity objectives',
          activity_needs: 'Metaplan cards',
          activity_organization: 'activity organization',
          activity_variations: 'activity variations',
          activity_description:'activity description',
          created_at: '2023-02-25T01:32:26.497858Z'
        }
      ]
    }
  ],
  created_at: '2023-02-25T01:32:26.486721Z',
  updated_at: '2023-02-25T01:32:26.486751Z',
  deleted_at: 'null'
});
  const [isFieldsChanged, setIsFieldChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [workshopImage, setWorkshopImage] = useState<File>();
  const [workshopAttachements, setWorkshopAttachements] = useState<File>();

  // const dispatch = useAppDispatch();
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const handleCardAdd = (card: ActivityModel, laneId: number | string) => {
    const laneIndex = lanes.lanes.findIndex((lane) => lane.id === laneId);
    const cardExists = lanes.lanes[laneIndex].cards.some(
      (existingCard) => existingCard.id === card.id
    );

    if (cardExists) {
      return;
    }

    setLanes((previousState) => ({
      ...previousState,
      lanes: previousState.lanes.map((lane) => {
        if (lane.id === laneId) {
          return {
            ...lane,
            cards: [...lane.cards, card],
          };
        }
        return lane;
      }),
    }));
  };

  const handleLaneAdd = (params: LaneType) => {
    const laneExists = lanes.lanes.some(
      (lane) =>
        lane.id === params.id && lane.session_title === params.session_title
    );
    if (laneExists) return;
    setLanes({ ...lanes, lanes: [...lanes.lanes, params] });
  };

  const handleCardDelete = (
    cardId: string | number,
    laneId: string | number
  ) => {
    setLanes((previousState) => ({
      ...previousState,
      lanes: previousState.lanes.map((lane) => {
        if (lane.id === laneId) {
          return {
            ...lane,
            cards: lane.cards.filter((card) => card.id !== cardId),
          };
        }
        return lane;
      }),
    }));
  };

  const handleLaneDelete = (laneId: string | number) => {
    setLanes((previousState) => ({
      ...previousState,
      lanes: previousState.lanes.filter((lane) => lane.id !== laneId),
    }));
  };

  const handleLaneUpdate = (laneId: string | number, params: LaneType) => {
    setLanes((previousState) => ({
      ...previousState,
      lanes: previousState.lanes.map((lane) => {
        if (lane.id === laneId) {
          return {
            ...lane,
            session_title: params.session_title,
          };
        }
        return lane;
      }),
    }));
  };

  const handleDataChange = (newData: Workshop) => {
    setLanes(newData);
  };

  const onFinish = (values: Workshop) => {
    setWorkshop({
      ...workshop,
      workshop_title: values.workshop_title,
      uses: values.uses,
      target_skills: values.target_skills,
      duration: values.duration,
      workshop_method: values.workshop_method,
      workshop_description: values.workshop_description,
      lanes: lanes.lanes,
    });
    setLoading(true);
    console.log('onFinish',workshop);
  };

  const handleSubmit = () => {
    const workshopImageData = {
      workshop_image: workshopImage,
      workshop_attachements: workshopAttachements
    };
    console.log(workshopImageData)
    httpApi
      .post(`${route}/workshop/create/lanes/`, workshop)
      .then((resp) => {
        httpApi
          .patch(
            `${route}/workshop/${resp.data.id}/update/image/`,
            workshopImageData,
            { headers: { "Content-Type": "multipart/form-data" } }
          )
          .then(() => {
            notificationController.success({
              message: "Workshop created successfully",
            });
          })
          .catch((err) =>
            notificationController.error({ message: err.message })
          );
      })
      .catch((err) => notificationController.error({ message: err.message }));
  };
  // eslint-disable-next-line
  const handleImageChange = (info: UploadChangeParam<any>) => {
    setWorkshopImage(info.file);
  };

  // eslint-disable-next-line
const handleAttachementsChange = (info: UploadChangeParam<any>) => {
  setWorkshopAttachements(info.file);
};
  const handleCustomRequest = (options: RcCustomRequestOptions) => {
    console.log(options)
  };

  useEffect(() => {
    if (isLoading) {
      handleSubmit();
      setLoading(false);
    }
  }, [isLoading, handleSubmit]);

  return (
    <>
      <Col>
        <Row gutter={[30, 30]}>
          <Col>
            <s.CollapseWrapper defaultActiveKey="2">
              <Panel header="Workshop details" key="1">
                <BaseButtonsForm
                  isFieldsChanged
                  onFieldsChange={() => setIsFieldChanged(true)}
                  loading={isLoading}
                  name="updateWorkshop"
                  onFinish={onFinish}
                  // footer={<></>}
                  {...formItemLayout}
                >
                  <BaseButtonsForm.Item
                    label="Title"
                    name="workshop_title"
                    initialValue={workshop.workshop_title}
                  >
                    <Input
                      placeholder="Title"
                      value={workshop.workshop_title}
                      defaultValue={workshop.workshop_title}
                    />
                  </BaseButtonsForm.Item>

                  <BaseButtonsForm.Item
                    label="Description"
                    name="workshop_description"
                    initialValue={workshop.workshop_description}
                  >
                    
                    <TextArea
                      placeholder="Description"
                      value={workshop.workshop_description}
                      defaultValue={workshop.workshop_description}
                    />
                  </BaseButtonsForm.Item>

                  <BaseButtonsForm.Item label="Uses" name="uses" initialValue={workshop.uses}>
                    <Select defaultValue={workshop.uses} value={workshop.uses}>
                      <Option value="Business Creation">
                        Business Creation
                      </Option>
                      <Option value="Post Creation">Post Creation</Option>
                      <Option value="Agriculture Business">
                        Agriculture Business
                      </Option>
                      <Option value="Startups">Startups</Option>
                      <Option value="Social Business">Social Business</Option>
                      <Option value="Green Business">Green Business</Option>
                      <Option value="Women Entrepreneurship">
                        Women Entrepreneurship
                      </Option>
                    </Select>
                  </BaseButtonsForm.Item>

                  <BaseButtonsForm.Item
                    label="Target skills"
                    name="target_skills"
                    initialValue={workshop.target_skills}
                  >
                    <Select
                      defaultValue={workshop.target_skills}
                      value={workshop.target_skills}
                      
                    >
                      <Option value="Computer Skills">Computer Skills</Option>
                      <Option value="Numeracy Skills">Numeracy Skills</Option>
                    </Select>
                  </BaseButtonsForm.Item>

                  <BaseButtonsForm.Item label="Method" name="workshop_method" initialValue={workshop.workshop_method}>
                    <Select
                      defaultValue={workshop.workshop_method}
                      value={workshop.workshop_method}
                    >
                      <Option value="Online">Online</Option>
                      <Option value="Blended">Blended</Option>
                      <Option value="Presential">Presential</Option>
                    </Select>
                  </BaseButtonsForm.Item>

                  <BaseButtonsForm.Item label="Duration" initialValue={workshop.duration}>
                    <label>
                      <BaseButtonsForm.Item name="duration">
                        <InputNumber
                          defaultValue={workshop.duration}
                          value={workshop.duration}
                          min={0}
                          keyboard={true}
                        />
                      </BaseButtonsForm.Item>
                    </label>
                  </BaseButtonsForm.Item>

                  <Upload
                    onChange={handleImageChange}
                    customRequest={handleCustomRequest}
                    beforeUpload={() => false}
                  >
                    <Button icon={<UploadOutlined />}>Choose an image</Button>
                  </Upload>
                  <br></br>
                  <Upload
                    onChange={handleAttachementsChange}
                    customRequest={handleCustomRequest}
                    beforeUpload={()=>false}
                  >
                    <Button icon={<UploadOutlined />}>Choose attachements</Button>
                  </Upload>
                  <br></br>
                </BaseButtonsForm>
              </Panel>
            </s.CollapseWrapper>
          </Col>
          <Col>
            {/* <Button onClick={handleSubmit}>Save</Button> */}
          </Col>
        </Row>
        <S.Kanban
          components={{
            Card,
            NewCardForm,
            LaneHeader,
            AddCardLink,
            NewLaneSection,
            NewLaneForm,
          }}
          editable
          laneDraggable
          canAddLanes
          data={lanes}
          onCardAdd={(card: ActivityModel, laneId: number | string) =>
            handleCardAdd(card, laneId)
          }
          onLaneAdd={(params: LaneType) => handleLaneAdd(params)}
          onCardDelete={(cardId: string | number, laneId: string | number) =>
            handleCardDelete(cardId, laneId)
          }
          onLaneDelete={(laneId: string | number) => handleLaneDelete(laneId)}
          onLaneUpdate={(laneId: string | number, params: LaneType) =>
            handleLaneUpdate(laneId, params)
          }
          onDataChange={(newData: Workshop) => handleDataChange(newData)}
          laneStyle={{ background: "transparent", maxHeight: "100%" }}
          cardStyle={{
            borderRadius: BORDER_RADIUS,
            backgroundColor: "var(--background-color)",
            padding: `1.25rem 1rem`,
            marginBottom: "1rem",
            minWidth: "16rem",
            maxWidth: "16rem",
          }}
        />
      </Col>
    </>
  );
};