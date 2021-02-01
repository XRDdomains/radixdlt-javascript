import { UserAction, UserActionType } from '@radixdlt/actions'
import {
	AnySpunParticle,
	AnyUpParticle,
	ParticleBase,
	ParticleGroup,
} from '@radixdlt/atom'
import { Address } from '@radixdlt/crypto'
import { Result } from 'neverthrow'
import { Amount } from '@radixdlt/primitives'

export type FungibleParticleTransitioner<From extends ParticleBase> = Readonly<{
	transition: (
		input: Readonly<{
			currentParticles: From[]
			totalAmountToTransfer: Amount
		}>,
	) => Result<AnySpunParticle[], Error>
}>

export type ActionToParticleGroupsMapper<T extends UserActionType> = Readonly<{
	actionType: T
	particleGroupsFromAction: (
		input: Readonly<{
			action: UserAction
			upParticles: AnyUpParticle[]
			addressOfActiveAccount: Address
		}>,
	) => Result<ParticleGroup[], Error>
}>

export type TokenTransferActionToParticleGroupsMapper = ActionToParticleGroupsMapper<UserActionType.TOKEN_TRANSFER>
export type BurnTokensActionToParticleGroupsMapper = ActionToParticleGroupsMapper<UserActionType.BURN_TOKENS>
