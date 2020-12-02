#### 체크박스
```javascript
              <FormGroup check / (disabled)>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Unchecked
                </Label>
              </FormGroup>
              <FormGroup check / (disabled)>
                <Label check>
                  <Input defaultChecked type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Checked
                </Label>
              </FormGroup>
```
#### 라디오버튼
```javascript
              <FormGroup check className="form-check-radio" / (disabled)>
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" / (disabled)>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is on
                </Label>
              </FormGroup>
```
#### 토글버튼
```javascript
              <Switch offColor="" offText="" onColor="" onText=""></Switch>
              <Switch defaultValue={false} offColor="" onColor=""></Switch>
```
#### 슬라이더
```javascript
              <div className="slider" id="sliderRegular"></div>
              <div className="slider slider-primary" id="sliderDouble"></div>
```


