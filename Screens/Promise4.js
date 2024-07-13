import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

const Promise4 = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text>
              {'\n'}가상아이템정책 {'\n'} {'\n'} ‘나혼자 솔로’ 서비스(이하
              “서비스”)은 만 19세이상 혹은 20세부터, 본 서비스의 일부 기능에
              사용되는 가상 아이템(이하 “포인트”)을 구매할 수 있습니다. 여기에는
              본 가상 아이템 정책의 이하의 조건이 적용됩니다. 귀하가 만 19세
              미만(혹은 귀하의 관할 구역에서의 성년의 나이 미만)일 경우, 귀하는
              본 가상 아이템 정책에 참여할 수 없습니다. 본 프로그램에 참여가
              가능한 이용자는 다음과 같습니다. {'\n'} {'\n'} 포인트 {'\n'}
              {'\n'}1) 포인트는 누가 구매할 수 있나요? · {'\n'} 본 서비스를
              이용하는 만 19세(혹은 귀하의 관할 구역에서의 성년의 나이) 이상
              혹은 20세의 이용자들은 공인된 결제 방식을 사용함으로써, 그리고
              당사가 제공하고 허가한 결제 서비스를 통해 당사로부터 가상의
              포인트를 구매할 수 있습니다. {'\n'}
              {'\n'}2) 포인트 구매 안내 · {'\n'}포인트의 가격은 구매 시
              공개됩니다. 포인트에 대한 모든 청구 및 결제는 관련 결제 장치를
              통해 구매 당시 지정한 통화로 처리됩니다. 외환 정산, 해외 결제
              수수료 및 결제 채널 수수료는 귀하와 관련 결제 서비스 제공업체
              사이의 계약을 바탕으로 합니다. · 귀하는 귀하의 포인트 구매와
              관련된 결제행위에 대하여 책임을 부담합니다. 일단 구매가 완료되면
              귀하의 이용자 계정은 포인트를 받게 됩니다. · 귀하가 구매를
              변경하고자 할 경우에는 아래 명시된 문의하기 안내를 통해 당사로
              연락해 주시기 바랍니다. 이러한 변경은 가격 및 귀하의 구매와 관련된
              기타 요소에 영향을 미칠 수 있다는 점에 유의하십시오. 귀하가
              유럽연합 지역에 거주하는 경우, 귀하는 소비자 권리명령 및 그 시행에
              관한 법령에 따라 구매를 철회할 권리가 있습니다. 그러나 귀하는
              귀하가 포인트를 구매함으로써, 구매가 완료된 즉시 당사가 귀하에게
              포인트를 공급하기 시작하며, 이 시점에서 귀하가 계약을 취소 또는
              철회할 권리가 상실된다는 것을 인지하고 동의합니다. {'\n'} {'\n'}3)
              포인트 이용 안내 · {'\n'} 포인트는 본 서비스 내 콘텐츠 이용을 위해
              사용할 수 있습니다. 포인트는 현금, 법정통화, 다른 주, 지역 또는
              행정지구에서 통용되는 통화나 다른 재화로 교환 불가합니다. ·
              포인트는 본 서비스에서만 사용 가능하며, 당사가 지정하는 경우를
              제외하고, 다른 프로모션, 쿠폰, 할인 또는 특별행사와 함께 결합 또는
              사용할 수 없습니다. · 포인트는 당사의 명시적인 서면 승인이 없는
              한, 본 서비스의 다른 이용자 또는 제3자에게 양도 또는 이전할 수
              없습니다. 당사 이외에 모든 포인트의 판매, 교환, 양도 또는 기타
              처분 활동은 명백히 금지됩니다. · 누적된 포인트는 재산이 아니며,
              {'\n'}(a) 사망, {'\n'}(b) 가족 관련 사정의 일환 또는 {'\n'}(c)
              기타 법령의 운영에 따라 이전되지 않습니다. · 당사의 명시적 서면
              동의가 없이 양도, 판매 또는 이전된 모든 포인트는 무효입니다. 앞서
              말한 제한사항을 위반한 본 서비스의 이용자는 그 계정이 당사에
              의하여 해지되고, 해당 이용자의 계정에서 포인트가 몰수되며, 손해와
              소송 및 거래 비용에 관한 책임을 부담합니다. · 이용자의 모든
              포인트는 어떠한 이유로든 해당 이용자의 계정이 해지되면 자동으로
              유효기간이 만료됩니다. · 귀하는 일반적인 상황 또는 특정한 상황에서
              당사가 그처럼 하는 것에 정당한 이유가 있는 경우, 당사가 해당
              포인트를 관리, 규제, 제어, 변경 및/또는 제거할 절대적 권리를
              보유하며 당사는 해당 권리의 행사를 바탕으로 귀하에게 어떠한 책임도
              지지 않는다는 것에 동의합니다. 만약 당사가 본 서비스에서 포인트를
              완전히 없애기로 할 경우, 당사는 귀하에게 합리적인 통지를
              제공함으로써 그렇게 할 것입니다. {'\n'}
              {'\n'}4) 문의 · 포인트의 구매와 관련하여 문제가 있다면 앱 내
              문의하기를 통해 연락하시기 바랍니다.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              borderWidth: 1,
              borderRadius: 15,
              padding: 10,
              marginHorizontal: 10,
              backgroundColor: 'lightgray',
            }}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Text style={{ textAlign: 'center' }}>내용을 확인했습니다.</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Promise4

const styles = StyleSheet.create({})